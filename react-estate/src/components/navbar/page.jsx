import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <Link className="logo">
          <img src="/vite.svg" />
          <span>React ESTRAT</span>
        </Link>
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/">
          About
        </Link>
        <Link className="link" href="/">
          Contact
        </Link>
        <Link className="link" href="/">
          Agents
        </Link>
      </div>

      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1693313531/p4/n4xmk2mnmu9rtzukz1ux.jpg" alt="w" className="" />
            <span>chong dong meng</span>
            <Link to="/profile" className="profile">
              Profile
            </Link>
          </div>
        ) : (
          <>
            <Link herf="/">Sign in </Link>
            <Link herf="/" className="register">
              Sign up
            </Link>
          </>
        )}

        <div className="miniicon">
          <img
            src="./menu.png"
            alt="dint work"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link herf="/">Home</Link>
          <Link herf="/">About</Link>
          <Link herf="/">Contact</Link>
          <Link herf="/">Agents</Link>
          <Link herf="/">Home</Link>
          <Link herf="/">About</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
