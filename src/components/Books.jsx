import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Helmet } from 'react-helmet-async';

const Books = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://books-server-eosin.vercel.app/books/category/${category}`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, [category]);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <Helmet>
              <title>Books by Category</title>
            </Helmet>
      {books.map((book) => (
        <div key={book._id} className="card shadow-lg p-4">
          <img src={book.image} alt={book.name} className="w-full h-40 object-cover mb-4" />
          <h2 className="text-xl font-bold">{book.name}</h2>
          <p className="text-gray-600">Author: {book.authorName}</p>
          <p className="text-gray-600">Category: {book.category}</p>
          <p className="text-gray-600">Quantity: {book.quantity}</p>
          <ReactStars value={book.rating} edit={false} />
          <Link to={`/book-details/${book._id}`}>
            <button className="btn btn-primary mt-4">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Books;
