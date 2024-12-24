import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddBook = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    quantity: "",
    authorName: "",
    category: "",
    shortDescription: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/books",
        formData
      );
      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Book added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          image: "",
          name: "",
          quantity: "",
          authorName: "",
          category: "",
          shortDescription: "",
          rating: "",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to add book. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>

      {/* Book Content Section */}
      <div className="mb-6 bg-gray-100 p-4 rounded shadow-sm">
        
        <p className="text-sm text-gray-700">
          Add all the details about the book you want to share with our library
          community. Ensure the title, author, and category match the content
          of the book. Ratings should be based on your personal assessment of
          the book's quality.
        </p>
      </div>

      {/* Add Book Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter the image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Book Title</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter book title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter quantity"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Author Name</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter author's name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Comics">Comics</option>
            <option value="Computers & Tech">Computers & Tech</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter a brief description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter rating (1-5)"
            min="1"
            max="5"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;