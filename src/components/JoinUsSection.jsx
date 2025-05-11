
import { Link } from 'react-router-dom';

const JoinUsSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-orange-50 p-8 md:p-16 text-center mb-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Interested in Books?</h2>
        <p className="text-lg mb-6">Join our community of book lovers today! Gain access to a vast library, borrow books, and much more.</p>
        <Link
          to="/login"
          className="inline-block bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default JoinUsSection;
