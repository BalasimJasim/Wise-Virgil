import { useState } from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import NavBar from "./NavBar";
import "./header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <HeaderTop setToggle={setToggle} toggle={toggle} />
      <HeaderMiddle />
      <NavBar toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
