import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  if (!user) {
    return <Navigate state={{ from: location.pathname }} to="/login" />;
  }

  return children;
};

export default PrivateRoute;