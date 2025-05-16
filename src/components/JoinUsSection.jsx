import { Link } from 'react-router-dom';

const JoinUsSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 p-8 md:p-16 text-center mb-10 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Interested in Books?</h2>
        <p className="text-lg mb-6">
          Join our community of book lovers today! Gain access to a vast library, borrow books, and much more.
        </p>
        <Link
          to="/login"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default JoinUsSection;
