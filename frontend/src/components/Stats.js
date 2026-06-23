function Stats({ books }) {
  const totalBooks = books.length;

  const completedBooks = books.filter(
    (book) => book.status === "Completed"
  ).length;

  const readingBooks = books.filter(
    (book) => book.status === "Reading"
  ).length;

  const wishlistBooks = books.filter(
    (book) => book.status === "Wishlist"
  ).length;

  return (
    <div className="card">
      <h2>Reading Status</h2>

      <p><strong>Total Books:</strong> {totalBooks}</p>
      <p><strong>Reading:</strong> {readingBooks}</p>
      <p><strong>Completed:</strong> {completedBooks}</p>
      <p><strong>Wishlist:</strong> {wishlistBooks}</p>
    </div>
  );
}

export default Stats;