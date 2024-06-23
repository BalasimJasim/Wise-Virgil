import { useContext } from "react";
import { Link } from "react-router-dom";
import BookStoreContext from "../../context/BookContext.js";

import "./header.scss";

const HeaderMiddle = () => {
  const { cartInfoLength } = useContext(BookStoreContext);

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <img
          src="/logo/logo.png"
          alt="Book Store Logo"
          className="logo-image"
        />
        <span className="logo-text">Wise Virgil</span>
      </Link>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search in book store..."
          aria-label="Search in book store"
        />
        <button className="header-middle-search-button">
          <i className="bi bi-search"></i>
        </button>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartInfoLength > 0 && (
          <b className="cart-notification">{cartInfoLength}</b>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
};

export default HeaderMiddle;
