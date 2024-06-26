import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError("fail to register");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSumbit}>
          <h1>Create and Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Register;
