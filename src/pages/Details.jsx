import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useAuth } from "../components/AuthProvider/AuthProvider"; 
import useAxiosSecure from "../hooks/useAxiosSecure";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [book, setBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const axiosSecure = useAxiosSecure();

  
  useEffect(() => {
    if (loading) return; 

    if (!user) {
      navigate("/login");
      return;
    }

    
    fetchBookDetails();
  }, [id, loading, user, navigate]);

  const fetchBookDetails = async () => {
    try {
      const { data } = await axiosSecure.get(`/book-details/${id}`);
      setBook(data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const handleBorrow = async () => {
    if (book.quantity <= 0) {
      alert("No available copies to borrow.");
      return;
    }
  
    try {
      const { data } = await axiosSecure.post(`/borrow-book`, {
        bookId: id,
        userName: user.displayName,
        userEmail: user.email,
        returnDate,
      });
  
      if (data.error) {
        alert(data.error);
      } else {
        alert("Book borrowed successfully");
        setBook(data.updatedBook);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error borrowing book:", error);
      alert("Failed to borrow the book. Please try again later.");
    }
  };

 
  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="w-11/12 mx-auto p-4 mb-12">
      <div className="card shadow-lg p-6 flex flex-col md:flex-row">
       
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

       
        <div className="w-full md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
          <p className="text-gray-600">Author: {book.authorName}</p>
          <p className="text-gray-600">Category: {book.category}</p>
          <p className="text-gray-600">Quantity: {book.quantity}</p>
          <p className="text-gray-600">Rating: {book.rating}</p>
          <p className="text-gray-600">Description: {book.shortDescription}</p>
          <button
            className="btn btn-primary mt-4"
            onClick={() => setIsModalOpen(true)}
            disabled={book.quantity === 0}
          >
            {book.quantity === 0 ? "Out of Stock" : "Borrow"}
          </button>
        </div>
      </div>

     
      <Modal
  isOpen={isModalOpen}
  onRequestClose={() => setIsModalOpen(false)}
  className="modal-content"
  overlayClassName="modal-overlay"
>
  <div className="flex items-center justify-center w-full h-full">
    <div className="modal-content bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/3">
      <h2 className="text-xl font-bold mb-4">Borrow Book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBorrow();
        }}
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name:</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email:</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Return Date:</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Confirm Borrow
        </button>
      </form>
    </div>
  </div>
</Modal>
    </div>
  );
};

export default Details;