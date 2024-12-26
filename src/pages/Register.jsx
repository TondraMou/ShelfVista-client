import { useState, useContext } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { handleRegister, handleGoogleLogin, manageProfile } = useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter";
    }
    if (!isLongEnough) {
      return "Password must be at least 6 characters long";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      Swal.fire("Error", passwordError, "error");
      return;
    }

    if (password !== conPassword) {
      setError("Passwords didn't match");
      Swal.fire("Error", "Passwords didn't match", "error");
      return;
    }

    handleRegister(email, password)
      .then((res) => {
        manageProfile(name, photoURL)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "Your account has been created successfully.",
              timer: 2000,
              showConfirmButton: false,
            });
            navigate("/");
          })
          .catch((err) => {
            Swal.fire("Error", "Error updating profile: " + err.message, "error");
          });
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire("Error", "Registration failed: " + err.message, "error");
      });
  };

  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          text: "Welcome to the app!",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Error", "Google login failed: " + err.message, "error");
      });
  };

  return (
    <div className="min-h-[800px] flex items-center justify-center">
      <Helmet>
              <title>Register</title>
            </Helmet>
      <div className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#4E6BFF] mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered bg-gray-200 dark:bg-gray-900 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium">
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered bg-gray-200 dark:bg-gray-900 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered bg-gray-200 dark:bg-gray-900 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-gray-200 dark:bg-gray-900 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="conPassword" className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="conPassword"
              placeholder="Confirm your password"
              className="input input-bordered bg-gray-200 dark:bg-gray-900 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4E6BFF] text-white p-3 rounded-lg hover:bg-blue-400"
          >
            Register
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-[#4E6BFF] hover:underline">
              Login
            </a>
          </p>
        </div>
        <div className="divider my-4">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-[#4E6BFF] text-white p-3 rounded-lg hover:bg-blue-400"
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;