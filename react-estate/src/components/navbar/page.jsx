import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);




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
        {currentUser ? (
          <div className="user">
            <img src={currentUser?.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser?.username}</span>
            <Link to="/profile" className="profile">
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}

        <div className="miniicon">
          <img
            src="/menu.png"
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
