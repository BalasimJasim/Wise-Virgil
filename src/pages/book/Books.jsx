import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import BookStoreContext from "../../context/BookContext";
import Rating from "../../components/book-slider/Rating";
import "./book.scss";
import { books } from "../../data/books";

const Book = () => {
  const { addToCart } = useContext(BookStoreContext);
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const book = books.find((b) => b.id === +id);

  if (!book) {
    return <div className="book-not-found">Book not found.</div>;
  }

  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              onClick={() => addToCart(book, qty)}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i> Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">{book.description}</p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength} pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.publicationDate}</b>
        </div>
      </div>
    </div>
  );
};

export default Book;
