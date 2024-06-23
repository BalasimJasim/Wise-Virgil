/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import BookStoreContext from "../../context/BookContext";
import Modal from "../modal/Modal";
import "./book-slider.scss";
import Rating from "./Rating";
import { fetchBooks } from "../../helpers/fetch.js";

const BookSlider = ({ query }) => {
  const { addToCart } = useContext(BookStoreContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await fetchBooks(query);
        setBooks(books);
      } catch (error) {
        console.error(error.message);
      }
    };
    getBooks();
  }, [query]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else {
      setSlideIndex((prevIndex) =>
        prevIndex < books.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const truncateAuthor = (author) => {
    const words = author.split(" ");
    return words.length > 2 ? words.slice(0, 2).join(" ") + "..." : author;
  };

  return (
    <div className="book-slider-container">
      {slideIndex > 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-left book-slider-arrow-left"
        ></i>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {books.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={item.image}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <p className="book-slide-item-author">
              Author(s): {truncateAuthor(item.author)}
            </p>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slider-item-price">
              {item.price === "Not for sale" ? item.price : `$${item.price}`}
            </div>
            <p className="book-slide-item-description">
              {truncateText(item.description, 100)}
            </p>
            <div className="book-slider-icons-wrapper">
              <i
                onClick={() => handleOpenModal(item)}
                className="bi bi-eye-fill"
              ></i>
              <i
                onClick={() => addToCart(item, 1)}
                className="bi bi-cart-plus"
              ></i>
            </div>
          </div>
        ))}
      </div>
      {slideIndex < books.length - 1 && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-right book-slider-arrow-right"
        ></i>
      )}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default BookSlider;
