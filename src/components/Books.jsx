import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const Books = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/books/category/${category}`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, [category]);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {books.map((book) => (
        <div key={book._id} className="card shadow-lg p-4">
          <img src={book.image} alt={book.name} className="w-full h-40 object-cover mb-4" />
          <h2 className="text-xl font-bold">{book.name}</h2>
          <p className="text-gray-600">Author: {book.authorName}</p>
          <p className="text-gray-600">Category: {book.category}</p>
          <p className="text-gray-600">Quantity: {book.quantity}</p>
          <ReactStars value={book.rating} edit={false} />
          <button className="btn btn-primary mt-4">Details</button>
        </div>
      ))}
    </div>
  );
};

export default Books;
