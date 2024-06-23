/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/forms/Login.jsx";
import Authors from "./pages/authors/Authors.jsx";
import Register from "./pages/forms/Register.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Books from "./pages/book/Books.jsx";

function App() {
  const [registeredUsername, setRegisteredUsername] = useState(null);

  const handleRegister = (username) => {
    setRegisteredUsername(username);
  };

  return (
    <BrowserRouter>
      <Header registeredUsername={registeredUsername} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route path="/authors" element={<Authors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
