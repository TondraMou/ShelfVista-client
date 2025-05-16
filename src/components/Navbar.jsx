import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Dark/Light theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

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
      <NavLink to="/" className="hover:text-blue-500 px-3 py-2 block dark:text-white">
        Home
      </NavLink>
      <NavLink to="/information" className="hover:text-blue-500 px-3 py-2 block dark:text-white">
        Information
      </NavLink>
      <NavLink to="/help" className="hover:text-blue-500 px-3 py-2 block dark:text-white">
        Help
      </NavLink>
      {user && (
        <>
          <NavLink to="/books" className="hover:text-blue-500 px-3 py-2 block dark:text-white">
            All Books
          </NavLink>
          <NavLink to="/add-book" className="hover:text-blue-500 px-3 py-2 block dark:text-white">
            Add Book
          </NavLink>
          <NavLink to="/borrowed-books" className="hover:text-blue-500 px-3 py-2 block dark:text-white">
            Borrowed Books
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <>
      <nav className="bg-slate-100 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-[#4E6BFF] dark:text-white">
                ShelfVista
              </Link>
            </div>

            {/* Center Links */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-4">
              {navLinks}
            </div>

            {/* Right Actions (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="text-[#4E6BFF] dark:text-white border-2 border-[#4E6BFF] dark:border-white p-2 rounded-md hover:bg-[#4E6BFF] hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
              >
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </button>

              {!user ? (
                <>
                  <NavLink
                    to="/login"
                    className="px-4 py-2 border-2 border-[#4E6BFF] text-[#4E6BFF] rounded-md hover:bg-[#4E6BFF] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 transition"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-4 py-2 border-2 border-[#4E6BFF] text-[#4E6BFF] rounded-md hover:bg-[#4E6BFF] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 transition"
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
                    className="px-4 py-2 border-2 border-[#4E6BFF] text-[#4E6BFF] rounded-md hover:bg-[#4E6BFF] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black dark:text-white focus:outline-none"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden dark:bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-start">
              {navLinks}
            </div>
            <div className="flex justify-center space-x-4 pb-3 border-t border-gray-700 pt-2">
              {!user ? (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border-2 border-[#4E6BFF] text-[#4E6BFF] rounded-md hover:bg-[#4E6BFF] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 transition"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border-2 border-[#4E6BFF] text-[#4E6BFF] rounded-md hover:bg-[#4E6BFF] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 transition"
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
                  className="px-4 py-2 border-2 border-[#4E6BFF] text-[#4E6BFF] rounded-md hover:bg-[#4E6BFF] hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 transition"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Theme Toggle for Mobile */}
            <div className="flex justify-center pt-2 pb-4">
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="text-[#4E6BFF] dark:text-white border-2 border-[#4E6BFF] dark:border-white p-2 rounded-md hover:bg-[#4E6BFF] hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
              >
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;