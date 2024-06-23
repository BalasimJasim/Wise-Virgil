import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow us on social media
        </div>
        <div className="footer-social-media-icons">
          {[
            { className: "bi-instagram", color: "#c0392b" },
            { className: "bi-telegram", color: "blue" },
            { className: "bi-facebook", color: "#2980b9" },
            { className: "bi-youtube", color: "red" },
            { className: "bi-twitter", color: "skyblue" },
          ].map((icon, index) => (
            <div
              key={index}
              className="footer-social-media-icon"
              style={{ color: icon.color }}
            >
              <i className={`bi ${icon.className}`}></i>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Useful Links</h3>
          <ul className="footer-links">
            {["Home", "Authors", "Blog", "About Us", "Contact Us"].map(
              (link, index) => (
                <li key={index} className="footer-link">
                  {link}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Germany - Hamburg - Hammer St
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              160233209
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              info@notemail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis aperiam fugiat ullam distinctio iusto sunt, numquam,
            quis reiciendis pariatur error itaque? Voluptatem libero maiores
            eveniet fugiat provident architecto minima pariatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquam perferendis
            nemo hic laborum aspernatur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
