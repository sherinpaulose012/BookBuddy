import { useState, useEffect } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

// --- Import asset graphics directly from your assets folder ---
import leftBg from "./assets/left.png";
import rightBg from "./assets/right.png";

function App() {
  const [books, setBooks] = useState([]);

  const refreshLibrary = () => {
    fetch("http://127.0.0.1:8000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching library:", err));
  };

  useEffect(() => {
    refreshLibrary();
  }, []);

  const totalBooks = books.length;
  const reading = books.filter((b) => b.status === "Reading").length;
  const completed = books.filter((b) => b.status === "Completed").length;
  const wishlist = books.filter((b) => b.status === "Wishlist").length;

  return (
    /* WE PASSED THE CSS IMAGES DIRECTLY VIA INLINE STYLES HERE */
    <div 
      className="app" 
      style={{ 
        "--left-illustration": `url(${leftBg})`, 
        "--right-illustration": `url(${rightBg})` 
      }}
    >
      <header>
        <h1>📚 Book Buddy</h1>
        <p>Keep Track of Every Book and Every Page. Enjoy Reading!</p>
      </header>

      <div className="dashboard">
        <div className="card add-section">
          <h2>Add Book</h2>
          <AddBook onBookAdded={refreshLibrary} />
        </div>

        <div className="card stats-section">
          <h2>Reading Status</h2>
          <div className="stats">
            <div className="stat">Total Books <b>{totalBooks}</b></div>
            <div className="stat">Reading <b>{reading}</b></div>
            <div className="stat">Completed <b>{completed}</b></div>
            <div className="stat">Wishlist <b>{wishlist}</b></div>
          </div>
        </div>
      </div>

      <div className="books">
        <h2>📚 My Books</h2>
        <BookList books={books} onFetchNeeded={refreshLibrary} />
      </div>
    </div>
  );
}

export default App;