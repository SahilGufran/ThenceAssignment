import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1><b>Brunei</b></h1>
      
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Get Projects</Link>
        <HashLink to={"/#about"}>FAQs</HashLink>
        <HashLink to={"/#brands"}>Socials</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
