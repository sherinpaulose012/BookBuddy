import { useState } from "react";
import axios from "axios";

// Destructure the onBookAdded callback from props
function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("Reading");
  const [totalPages, setTotalPages] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");

  const addBook = async () => {
    // Basic validation to prevent sending empty submissions
    if (!title || !author) {
      alert("Please fill out at least Title and Author!");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/books", {
        title,
        author,
        genre,
        status,
        total_pages: Number(totalPages) || 0,
        current_page: Number(currentPage) || 0,
        notes,
        rating: Number(rating) || 0,
      });

      alert("Book Added Successfully!");

      // 1. Trigger the parent state update to pull fresh data from FastAPI
      if (onBookAdded) {
        onBookAdded();
      }

      // 2. Clear out the form inputs
      setTitle("");
      setAuthor("");
      setGenre("");
      setStatus("Reading");
      setTotalPages("");
      setCurrentPage("");
      setNotes("");
      setRating("");
    } catch (error) {
      console.error(error);
      alert("Error adding book");
    }
  };

  return (
    <div className="book-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Reading">Reading</option>
        <option value="Completed">Completed</option>
        <option value="Wishlist">Wishlist</option>
      </select>

      <input
        type="number"
        placeholder="Total Pages"
        value={totalPages}
        onChange={(e) => setTotalPages(e.target.value)}
      />

      <input
        type="number"
        placeholder="Current Page"
        value={currentPage}
        onChange={(e) => setCurrentPage(e.target.value)}
      />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <input
        type="number"
        step="0.1"
        min="0"
        max="5"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default AddBook;