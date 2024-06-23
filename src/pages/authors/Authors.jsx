import React, { useState } from "react";
import { authors } from "../../data/authors.js";
import "./authors.scss"; // Import the SCSS file

const Authors = () => {
  const [query, setQuery] = useState("");
  const [filteredAuthors, setFilteredAuthors] = useState(authors);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredAuthors(authors);
      setError("");
    } else {
      const filtered = authors.filter((author) =>
        author.name.toLowerCase().includes(value.toLowerCase())
      );
      if (filtered.length === 0) {
        setError("No authors found");
      } else {
        setError("");
      }
      setFilteredAuthors(filtered);
    }
  };

  const truncateName = (name) => {
    const words = name.split(" ");
    return words.length > 2 ? words.slice(0, 2).join(" ") + "..." : name;
  };

  return (
    <div className="authors">
      <div className="authors-search-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Enter author name"
          className="authors-search-input"
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="authors-list">
        {filteredAuthors.length > 0 ? (
          filteredAuthors.map((author) => (
            <div key={author.id} className="author">
              <h2 className="author-name">{truncateName(author.name)}</h2>
              <img
                src={author.image}
                alt={author.name}
                className="author-img"
              />
            </div>
          ))
        ) : (
          <p className="no-authors">No authors found</p>
        )}
      </div>
    </div>
  );
};

export default Authors;
