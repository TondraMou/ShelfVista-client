import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSignOut = () => {
    handleLogout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-blue-500 px-3 py-2 block">
        Home
      </NavLink>
      <NavLink to="/books" className="hover:text-blue-500 px-3 py-2 block">
        All Books
      </NavLink>
      <NavLink to="/add-book" className="hover:text-blue-500 px-3 py-2 block">
        Add Book
      </NavLink>
      <NavLink to="/borrowed-books" className="hover:text-blue-500 px-3 py-2 block">
        Borrowed Books
      </NavLink>
    </>
  );

  return (
    <>
      <nav className="bg-slate-100 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-[#4E6BFF]">
                ShelfVista
              </Link>
            </div>

            <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
              {navLinks}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {!user ? (
                <>
                  <NavLink
                    to="/login"
                    className="btn btn-outline btn-info px-3 py-2"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="btn btn-outline btn-info px-3 py-2"
                  >
                    Sign Up
                  </NavLink>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="h-8 w-8 rounded-full cursor-pointer"
                    />
                    <div className="absolute left-0 mt-1 w-auto bg-gray-700 text-white text-sm px-2 py-1 rounded hidden group-hover:block">
                      {user.displayName}
                    </div>
                  </div>

                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline btn-info px-3 py-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-start">
              {navLinks}
            </div>
            <div className="flex justify-center space-x-4 pb-3 border-t border-gray-700 pt-2">
              {!user ? (
                <>
                  <NavLink
                    to="/login"
                    className="text-gray-200 btn btn-outline btn-info px-3 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-gray-200 btn btn-outline btn-info px-3 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </NavLink>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="btn btn-outline btn-info px-3 py-2"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;