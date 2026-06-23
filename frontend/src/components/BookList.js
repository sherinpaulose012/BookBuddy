import { useEffect } from "react";
import axios from "axios";

function BookList({ books, onFetchNeeded }) {
  
  useEffect(() => {
  if (onFetchNeeded) {
    onFetchNeeded();
  }
}, [onFetchNeeded]); // <-- Added 'onFetchNeeded' here

  // Function to handle the FastAPI status change on dropdown switch
  const handleStatusChange = async (bookId, newStatus) => {
  try {
    // This matches the query parameter pattern (?status=...) FastAPI expects
    await axios.patch(`http://127.0.0.1:8000/books/${bookId}/status?status=${newStatus}`);
    
    if (onFetchNeeded) {
      onFetchNeeded(); // Instantly reloads the stats counter at the top!
    }
  } catch (err) {
    console.error("Error updating book status:", err);
    alert("Failed to update status");
  }
};

  return (
    <div>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div className="book-list-grid">
          {books.map((book) => (
            <div className="book-card-item" key={book.id}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              
              {/* STATUS CHANGED TO AN INLINE DROPDOWN SELECTOR */}
              <p>
                <strong>Status:</strong>{" "}
                <select 
                  className="status-updater"
                  value={book.status} 
                  onChange={(e) => handleStatusChange(book.id, e.target.value)}
                >
                  <option value="Reading">Reading</option>
                  <option value="Completed">Completed</option>
                  <option value="Wishlist">Wishlist</option>
                </select>
              </p>
              
              <p>
                <strong>Progress:</strong>{" "}
                {book.total_pages > 0 ? Math.round((book.current_page / book.total_pages) * 100) : 0}%
              </p>
              <p><strong>Current Page:</strong> {book.current_page} / {book.total_pages}</p>
              <p><strong>Rating:</strong> {book.rating}/5</p>
              <p><strong>Notes:</strong> {book.notes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;