import { useState, useEffect } from "react";
import "./slider.scss";
import firstBook from "../../images/classics.jpg";
import secondtBook from "../../images/literture.jpg";
import thirdBook from "../../images/team2.jpg";
import fourthBook from "../../images/ai.jpg";
import fifthBook from "../../images/wise.png";
import sixthBook from "../../images/classics.jpg";

const genres = [
  {
    title: "The Classics",
    desc: "Journey into the greatest minds",
    image: firstBook,
  },
  { title: "Literature", desc: "The Sweetest of Minds", image: secondtBook },
  {
    title: "Wisdom",
    desc: "Experience a world of perspectives",
    image: thirdBook,
  },
  { title: "Mystery", desc: "Unravel the unknown", image: fourthBook },
  { title: "Sci-Fi", desc: "Explore futuristic realms", image: fifthBook },
  { title: "Non-Fiction", desc: "Facts and reality", image: sixthBook },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex < genres.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const clickHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : genres.length - 1);
    } else {
      setSlideIndex(slideIndex < genres.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <button
        aria-label="Previous slide"
        onClick={() => clickHandler("left")}
        className="arrow arrow-left"
      >
        &lt;
      </button>

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        {genres.map((genre, index) => (
          <div
            key={index}
            className={`slide ${index === 0 ? "first-slide" : ""}`}
          >
            <div className="slide-img-wrapper">
              <img src={genre.image} alt={genre.title} />
            </div>
            <div className="slide-info-wrapper">
              <h1 className="slide-info-title">{genre.title}</h1>
              <p className="slide-info-desc">{genre.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        aria-label="Next slide"
        onClick={() => clickHandler("right")}
        className="arrow arrow-right"
      >
        &gt;
      </button>

      <div className="indicators">
        {genres.map((_, index) => (
          <span
            key={index}
            className={`indicator ${slideIndex === index ? "active" : ""}`}
            onClick={() => setSlideIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
