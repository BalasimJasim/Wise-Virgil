import HeadingTitle from "../../components/Heading-title/HeadingTitle";
import BookSlider from "../../components/book-slider/Book-slider";

import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="Most Gifted" />
      <BookSlider query="most+gifted" />
      <HeadingTitle title="Best Seller" />
      <BookSlider query="best+seller" />
      <HeadingTitle title="Most Wished For" />
      <BookSlider query="most+wished+for" />
    </div>
  );
};

export default Home;
