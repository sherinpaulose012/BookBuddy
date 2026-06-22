import { useState } from "react";
import axios from "axios";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("Reading");
  const [totalPages, setTotalPages] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");

  const addBook = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/books", {
        title,
        author,
        genre,
        status,
        total_pages: Number(totalPages),
        current_page: Number(currentPage),
        notes,
        rating: Number(rating),
      });

      alert("Book Added Successfully!");

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
    <div>
      <h2>Add Book</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <br /><br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Reading</option>
        <option>Completed</option>
        <option>Wishlist</option>
      </select>
      <br /><br />

      <input
        type="number"
        placeholder="Total Pages"
        value={totalPages}
        onChange={(e) => setTotalPages(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Current Page"
        value={currentPage}
        onChange={(e) => setCurrentPage(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        step="0.1"
        min="0"
        max="5"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
/>
      <br /><br />

      <button onClick={addBook}>
        Add Book
      </button>
    </div>
  );
}

export default AddBook;