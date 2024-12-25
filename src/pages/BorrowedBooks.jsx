import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthProvider/AuthProvider"; 
import { useNavigate } from "react-router-dom";

const BorrowedBooks = () => {
  const { user, loading } = useAuth(); 
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; 

    if (!user) {
      navigate("/login"); 
      return;
    }

    
    fetch(`http://localhost:5000/borrowed-books/${user.email}`)
      .then((response) => response.json())
      .then((data) => setBorrowedBooks(data))
      .catch((error) => {
        console.error("Error fetching borrowed books:", error);
      });
  }, [loading, user, navigate]);

  const handleReturn = (bookId) => {
    fetch(`http://localhost:5000/borrowed-books/return/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user.email, 
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Book returned successfully");
          setBorrowedBooks(borrowedBooks.filter(book => book._id !== bookId)); 
        } else {
          alert("Failed to return the book");
        }
      })
      .catch((error) => {
        console.error("Error returning book:", error);
      });
  };

  return (
    <div className="w-11/12 mx-auto p-4 mb-12">
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
                <p className="text-gray-600">Category: {book.bookDetails?.category}</p> 
                <p className="text-gray-600">Borrowed Date: {new Date(book.borrowDate).toLocaleDateString()}</p>
                <p className="text-gray-600">Return Date: {new Date(book.returnDate).toLocaleDateString()}</p>
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