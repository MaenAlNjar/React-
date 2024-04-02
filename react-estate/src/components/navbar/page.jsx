import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a className="logo">
          <img src="/vite.svg" />
          <span>React ESTRAT</span>
        </a>
        <a herf="/">Home</a>
        <a herf="/">About</a>
        <a herf="/">Contact</a>
        <a herf="/">Agents</a>
      </div>
      <div className="right">
        <a herf="/">Sign in </a>
        <a herf="/" className="register">
          Sign up
        </a>
        <div className="miniicon">
          <img
            src="./menu.png"
            alt="dint work"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={open ?'menu active':'menu'}>
          <a herf="/">Home</a>
          <a herf="/">About</a>
          <a herf="/">Contact</a>
          <a herf="/">Agents</a>
          <a herf="/">Home</a>
          <a herf="/">About</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
