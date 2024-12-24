import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const [book, setBook] = useState({
    image: "",
    name: "",
    authorName: "",
    category: "",
    rating: 1,
  });
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => console.error("Error fetching book details:", error));

    setCategories(["Comics", "Computers & Tech", "History", "Horror"]);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/books/${id}`, book)
      .then((response) => {
        alert("Book updated successfully!");
        navigate("/books");
      })
      .catch((error) => console.error("Error updating book:", error));
  };

  return (
    <div className="w-11/12 mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Update Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={book.image}
            onChange={handleChange}
            className="mt-1 w-full p-2 border"
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={book.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 border"
          />
        </div>
        <div>
          <label>Author Name</label>
          <input
            type="text"
            name="authorName"
            value={book.authorName}
            onChange={handleChange}
            className="mt-1 w-full p-2 border"
          />
        </div>
        <div>
          <label>Category</label>
          <select
            name="category"
            value={book.category}
            onChange={handleChange}
            className="mt-1 w-full p-2 border"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            value={book.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className="mt-1 w-full p-2 border"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;