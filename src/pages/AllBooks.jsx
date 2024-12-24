import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleUpdateRedirect = (bookId) => {
    navigate(`/update-book/${bookId}`);
  };

  return (
    <div className="w-11/12 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book._id} className="border p-4 rounded-lg shadow-lg">
            <img src={book.image} alt={book.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{book.name}</h2>
            <p className="text-sm">Author: {book.authorName}</p>
            <p className="text-sm">Category: {book.category}</p>
            <p className="text-sm">Rating: {book.rating}</p>
            <button
              onClick={() => handleUpdateRedirect(book._id)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;