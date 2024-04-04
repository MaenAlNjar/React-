import React from "react";
import "./profile.css";
import List from "../../components/list/page";
import Chat from "../../components/chat/page";
const Profile = () => {
  return (
    <div className="profilePage">
      <div className="detail">
        <div className="wrapper">
          <div className="title">
            <h1>User information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1693313531/p4/n4xmk2mnmu9rtzukz1ux.jpg"
                alt="w"
                className=""
              />
            </span>
            <span>
              UserName:<b>Chong meng</b>
            </span>
            <span>
              Email:<b>Chongmeng@email.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My list</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>My Saved</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
