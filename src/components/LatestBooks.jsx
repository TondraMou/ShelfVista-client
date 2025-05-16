import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

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
    <section className="py-16 px-6 w-11/12 mx-auto max-w-7xl">
      <div className="space-y-6 text-center mb-12">
        <h2 className="text-4xl font-bold">Explore the Latest Arrivals</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Discover our newest collection of books. Handpicked for your reading pleasure, these books span various genres to captivate your imagination.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {latestBooks.map((book) => (
          <Fade key={book._id} triggerOnce>
            <div className="overflow-hidden rounded-lg shadow-md bg-white">
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Fade>
        ))}
      </div>

      <div className="text-center">
        <a
          href="/books"
          className="inline-block border-2 border-[#4E6BFF] text-[#4E6BFF] px-6 py-3 rounded-lg hover:bg-[#4E6BFF] hover:text-white transition duration-300 shadow-md"
        >
          Browse All Books
        </a>
      </div>
    </section>
  );
};

export default LatestBooks;