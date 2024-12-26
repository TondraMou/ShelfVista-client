import { useEffect, useState } from "react";

const LatestBooks = () => {
  const [latestBooks, setLatestBooks] = useState([]);

  useEffect(() => {
    const fetchLatestBooks = async () => {
      try {
        const response = await fetch("https://books-server-eosin.vercel.app/latest-books");
        const data = await response.json();
        setLatestBooks(data.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch latest books:", error);
      }
    };
    fetchLatestBooks();
  }, []);

  return (
    <section className="py-16 px-6 w-11/12 mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">

      <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            Explore the Latest Arrivals
          </h2>
          <p className="text-lg">
            Discover our newest collection of books. Handpicked for your
            reading pleasure, these books span various genres to captivate your
            imagination.
          </p>
          <a
            href="/books"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg"
          >
            Browse All Books
          </a>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestBooks.map((book) => (
            <div
              key={book._id}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-[350px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default LatestBooks;