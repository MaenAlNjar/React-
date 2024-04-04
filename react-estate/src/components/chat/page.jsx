import React, { useState } from "react";
import "./chat.css";

const Chat = () => {
  const [chat, setChat] = useState(null);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1693313531/p4/n4xmk2mnmu9rtzukz1ux.jpg"
            alt="John Doe"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="message">
          <img
            src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1693313531/p4/n4xmk2mnmu9rtzukz1ux.jpg"
            alt="John Doe"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="message">
          <img
            src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1693313531/p4/n4xmk2mnmu9rtzukz1ux.jpg"
            alt="John Doe"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
      <div className="chatBox">
        <div className="top">
          <div className="user">
            <img
              src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1693313531/p4/n4xmk2mnmu9rtzukz1ux.jpg"
              alt="John Doe"
            />
          </div>
          <span className="close">X</span>
        </div>
        <div className="center">
          <div className="ChatMessage own">
            <p>lorm</p>
            <span>1 h ago</span>
          </div>
          <div className="ChatMessage">
            <p>lorm</p>
            <span>1 h ago</span>
          </div>
          <div className="ChatMessage own">
            <p>lorm</p>
            <span>1 h ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea className="textarea"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
