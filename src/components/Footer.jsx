

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm text-gray-400">
              Welcome to our library! Explore a wide collection of books and resources tailored to your needs. Empower your mind, one book at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="/books" className="hover:text-white">All Books</a>
              </li>
              <li>
                <a href="/add-book" className="hover:text-white">Add Book</a>
              </li>
              <li>
                <a href="/borrowed-books" className="hover:text-white">Borrowed Books</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400">123 Library Lane, Knowledge City</p>
            <p className="text-sm text-gray-400">Email: contact@librarysystem.com</p>
            <p className="text-sm text-gray-400">Phone: +123-456-7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 ShelfVista. All rights reserved.</p>
          <p className="mt-2">
            Made with <span className="text-red-500">&hearts;</span> by Tondra Mou
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;