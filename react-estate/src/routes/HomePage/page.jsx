import React, { useContext } from "react";
import "./Homepage.css";
import SearchBar from "../../components/searchBar/page";
import {AuthContext} from '../../context/AuthContext'
const HomePage = () => {

  const {currentUser} =useContext(AuthContext)
  console.log(currentUser);
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. ,
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo
            unde aperiam sint impedit aliquid vero deserunt. Distinctio odit
            beatae numquam, similique, voluptatem blanditiis libero eveniet
            rerum facilis expedita sint.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experince</h2>
            </div>
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experince</h2>
            </div>
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experince</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./OIP.jpeg" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
