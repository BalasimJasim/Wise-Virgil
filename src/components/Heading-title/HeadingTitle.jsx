/* eslint-disable react/prop-types */
import "./HeadingTitle.css";

const HeadingTitle = ({ title }) => {
  return (
    <div className="heading-title-container">
      <h2 className="heading-title">{title}</h2>
    </div>
  );
};

export default HeadingTitle;
