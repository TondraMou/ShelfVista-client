import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from 'react-helmet-async';

const BorrowedBooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading: authLoading } = useAuth(); 
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      navigate("/login");
      return;
    }

    fetchBorrowedBooks();
  }, [authLoading, user, navigate]);

  const fetchBorrowedBooks = async () => {
    setLoading(true);
    try {
      const { data } = await axiosSecure.get(`/borrowed-books/${user?.email}`);
      setBorrowedBooks(data);
    } catch (error) {
      console.error("Error fetching borrowed books:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleReturn = async (bookId) => {
    try {
      const { data } = await axiosSecure.put(`/borrowed-books/return/${bookId}`, {
        userEmail: user.email,
      });

      if (data.success) {
        alert("Book returned successfully");
        setBorrowedBooks((prevBooks) =>
          prevBooks.filter((book) => book._id !== bookId)
        );
      } else {
        alert("Failed to return the book");
      }
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#123abc"} loading={authLoading || loading} />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto p-4 mb-12">
      <Helmet>
              <title>Your Borrowed Books</title>
            </Helmet>
      <h2 className="text-2xl font-bold text-center mb-4">Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>No borrowed books found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {borrowedBooks.map((book) => (
            <div key={book._id} className="card shadow-lg p-6">
              <img
                src={book.bookDetails?.image}
                alt={book.bookDetails?.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="font-bold">{book.bookDetails?.name}</h3>
                <p className="">Category: {book.bookDetails?.category}</p>
                <p className="">
                  Borrowed Date: {new Date(book.borrowDate).toLocaleDateString()}
                </p>
                <p className="">
                  Return Date: {new Date(book.returnDate).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleReturn(book._id)}
                  className="btn btn-danger mt-4"
                >
                  Return
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;