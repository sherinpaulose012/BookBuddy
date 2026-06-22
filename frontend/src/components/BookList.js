import { useEffect, useState } from "react";
import axios from "axios";
import Stats from "./Stats";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>My Books</h2>
      <Stats books={books} />

      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>

            <p>
              <strong>Author:</strong> {book.author}
            </p>

            <p>
              <strong>Genre:</strong> {book.genre}
            </p>

            <p>
              <strong>Status:</strong> {book.status}
            </p>

            <p>
              <strong>Progress:</strong>{" "}
              {book.total_pages > 0
                ? Math.round(
                    (book.current_page / book.total_pages) * 100
                  )
                : 0}
              %
            </p>

            <p>
              <strong>Current Page:</strong>{" "}
              {book.current_page} / {book.total_pages}
            </p>

            <p>
              <strong>Rating:</strong> {book.rating}/5
            </p>

            <p>
              <strong>Notes:</strong> {book.notes}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;