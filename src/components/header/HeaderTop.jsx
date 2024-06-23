/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HeaderTop = ({ setToggle, toggle }) => {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu-icon"
      >
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-phone"></i>
        123456789
      </div>
      <div className="header-top-text">Wise Virgil</div>
      <div className="header-top-link">
        <Link to="/login" className="header-top-login-icon">
          <i className="bi bi-person-fill"></i>
        </Link>
      </div>
    </div>
  );
};

export default HeaderTop;
