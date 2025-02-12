import React from 'react';

const HelpOnUsagePage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Help on Usage</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome to the ShelfVista!</h2>
        <p className="text-lg text-gray-600 mb-4">
          This website allows you to explore and manage books in the library. Here’s a quick guide on how you can use the website and access the different features.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Finding and Viewing All Books</h2>
        <p className="text-lg text-gray-600 mb-4">
          You can find the list of all available books in the library by navigating to the <strong>All Books</strong> page. This page allows you to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>View book details, including title, author, category, rating, and cover image.</li>
          <li>See a list of available books in different categories like Novel, Thriller, Sci-Fi, etc.</li>
        </ul>
        <p className="text-lg text-gray-600 mb-4">
          However, to access the full details of the books and see the list, you need to be logged in. If you are not logged in, you will be prompted to log in first.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Adding New Books</h2>
        <p className="text-lg text-gray-600 mb-4">
          If you are an authorized user (e.g., admin), you can add new books to the library by going to the <strong>Add Book</strong> page. On this page, you can:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Upload the book's cover image.</li>
          <li>Enter the book title, author name, quantity, category, description, and rating.</li>
          <li>Submit the form to add the book to the library database.</li>
        </ul>
        <p className="text-lg text-gray-600 mb-4">
          Please note that the <strong>Add Book</strong> page is only accessible to authorized users who are logged in. If you’re not logged in, you won’t be able to add new books.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Updating Book Details</h2>
        <p className="text-lg text-gray-600 mb-4">
          You can update the details of any book in the library if you are an authorized user. To update a book:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Go to the <strong>All Books</strong> page and find the book you want to update.</li>
          <li>Click the <strong>Update</strong> button next to the book you wish to edit.</li>
          <li>On the update page, you can edit the book's image, title, author, category, and rating.</li>
        </ul>
        <p className="text-lg text-gray-600 mb-4">
          This page is protected and accessible only to authorized users who are logged in.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Borrowing Books</h2>
        <p className="text-lg text-gray-600 mb-4">
          As a user, you can borrow books from the library. To do so, you need to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Browse through the library and find a book you wish to borrow.</li>
          <li>If the book is available, click on the <strong>Borrow</strong> button next to the book.</li>
          <li>Enter the return date for the book and submit.</li>
        </ul>
        <p className="text-lg text-gray-600 mb-4">
          The borrowed books will appear in your personal <strong>Borrowed Books</strong> page, where you can also return books by clicking the <strong>Return</strong> button.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Only logged-in users can borrow books, and borrowed books can only be viewed by the person who borrowed them.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Returning Books</h2>
        <p className="text-lg text-gray-600 mb-4">
          If you’ve borrowed books, you can return them when you're done. To return a book:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Go to the <strong>Borrowed Books</strong> page where your borrowed books are listed.</li>
          <li>Click the <strong>Return</strong> button next to the book you wish to return.</li>
          <li>The book's quantity in the library will increase, and it will be removed from your borrowed list.</li>
        </ul>
        <p className="text-lg text-gray-600 mb-4">
          This functionality is only available to logged-in users who have borrowed books.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Important Notes:</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>You must be logged in to access the <strong>All Books</strong>, <strong>Add Book</strong>, <strong>Update Book</strong>, and <strong>Borrowed Books</strong> pages.</li>
          <li>Only authorized users can add or update books.</li>
          <li>If you’re not logged in, you will be prompted to log in before proceeding with these actions.</li>
        </ul>
      </section>

      
    </div>
  );
};

export default HelpOnUsagePage;