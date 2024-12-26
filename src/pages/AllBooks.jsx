import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);
  const [view, setView] = useState("card");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axiosSecure.get("/books");
        setBooks(data);
        setFilteredBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [axiosSecure]);

  const handleFilterAvailable = () => {
    setShowAvailable((prev) => !prev);
    if (!showAvailable) {
      setFilteredBooks(books.filter((book) => book.quantity > 0));
    } else {
      setFilteredBooks(books);
    }
  };

  const handleToggleView = (event) => {
    setView(event.target.value);
  };

  const handleUpdateRedirect = (bookId) => {
    navigate(`/update-book/${bookId}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">All Books</h1>

      <div className="flex flex-wrap justify-between mb-4">
        <button
          onClick={handleFilterAvailable}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2 sm:mb-0"
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>

        <select
          onChange={handleToggleView}
          value={view}
          className="px-4 py-2 border rounded mb-2 sm:mb-0"
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {view === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div key={book._id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-64 object-cover mb-2"
              />
              <h2 className="text-lg font-semibold">{book.name}</h2>
              <p className="text-sm">Author: {book.authorName}</p>
              <p className="text-sm">Category: {book.category}</p>
              <p className="text-sm">Rating: {book.rating}</p>
              <p className="text-sm">Quantity: {book.quantity}</p>
              <button
                onClick={() => handleUpdateRedirect(book._id)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Book Name</th>
                <th className="border px-4 py-2">Author</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Rating</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td className="border px-4 py-2">{book.name}</td>
                  <td className="border px-4 py-2">{book.authorName}</td>
                  <td className="border px-4 py-2">{book.category}</td>
                  <td className="border px-4 py-2">{book.rating}</td>
                  <td className="border px-4 py-2">{book.quantity}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleUpdateRedirect(book._id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
