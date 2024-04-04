import React from "react";
import Slider from "../../components/slider/page";
import Map from "../../components/map/map";
import "./singlePage.css";
import { singlePostData } from "../../lib/dumyData";
import { userData } from "../../lib/dumyData";
const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1 className="title">{singlePostData.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="featuers">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Owner is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>Owner is responsible</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img />
              <span></span>
            </div>
            <div className="size">
              <img />
              <span></span>
            </div>
            <div className="size">
              <img />
              <span></span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>Owner </p>
              </div>
            </div>
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>Owner </p>
              </div>
            </div>
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>Owner </p>
              </div>
            </div>
          </div>
          <p className="title">location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="bottons">
            <button>
              <img src="./" alt="" /> Send message
            </button>
            <button>
              <img src="./" alt="" /> Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
