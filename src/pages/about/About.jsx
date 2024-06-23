import "./about.scss";

const About = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Your one-stop destination for books and more.</p>
      </div>
      <div className="about-us-content">
        <section className="about-us-section">
          <h2>Our Story</h2>
          <p>
            Welcome to our bookstore, a haven for book lovers. Established in
            2021, we are committed to bringing you the best selection of books
            from various genres. Our mission is to foster a love for reading and
            provide a space where readers can find their next great read.
          </p>
        </section>
        <section className="about-us-section">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Passion:</strong> We are passionate about books and
              reading.
            </li>
            <li>
              <strong>Quality:</strong> We offer a curated selection of the
              finest books.
            </li>
            <li>
              <strong>Community:</strong> We believe in building a community of
              readers.
            </li>
            <li>
              <strong>Service:</strong> We strive to provide exceptional
              customer service.
            </li>
          </ul>
        </section>
        <section className="about-us-section">
          <h2>Meet the Team</h2>
          <div className="team">
            <div className="team-member">
              <img
                src="/authors/Michel-de-Montaigne.jpg"
                alt="Michel de Montaigne"
              />
              <h3>Michel de Montaigne</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="/authors/team2.jpg" alt="Etienne de la Boetie" />
              <h3>Etienne de la Boetie</h3>
              <p>Chief Operating Officer</p>
            </div>
            <div className="team-member">
              <img src="/authors/Charron.jpg" alt="Pierre Charron" />
              <h3>Pierre Charron</h3>
              <p>Head of Marketing</p>
            </div>
            <div className="team-member">
              <img
                src="/authors/Michel-de-Montaigne.jpg"
                alt="Marie de Gournay"
              />
              <h3>Marie de Gournay</h3>
              <p>Head of Editorial</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
