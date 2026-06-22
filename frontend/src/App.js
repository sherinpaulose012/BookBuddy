import "./App.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="container">
      <h1>📚 Book Buddy</h1>

      <div className="card">
        <AddBook />
      </div>

      <BookList />
    </div>
  );
}

export default App;