import { createContext, useEffect, useState, useContext } from "react";
export const authContext = createContext();
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from 'axios'

const AuthProvider = ({ routes }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password, name, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      return updateProfile(userCredential.user, {
        displayName: name,
        photoURL,
      });
    });
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image
    });
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile,
    user,
    setUser,
    loading
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      console.log('CurrentUser-->', currentUser)
      if (currentUser?.email) {
        setUser(currentUser)
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: currentUser?.email,
          },
          { withCredentials: true }
        )
        console.log(data)
      } else {
        setUser(currentUser)
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/logout`,
          { withCredentials: true }
        )
      }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  return (
    <authContext.Provider value={authInfo}>
      {routes}
    </authContext.Provider>
  );
};

// Custom hook to access the auth context
export const useAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;