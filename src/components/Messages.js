import React from "react";
import Message from "./Message";
import Data from "../Data.json";
function Messages() {
  return (
    <div className="messages">
      <Message
        name={Data[0].name}
        message="hi"
        timestamp="60 seconds ago"
        pic={Data[0].img}
      />
      <Message
        name={Data[1].name}
        message="hello"
        timestamp="30 seconds ago"
        pic={`${Data[1].img}/${Math.floor(Math.random() * 1000)}`}
      />
      <Message
        name={Data[2].name}
        message="hiii"
        timestamp="70 seconds ago"
        pic={`${Data[1].img}/${Math.floor(Math.random() * 1000)}`}
      />
      <Message
        name={Data[3].name}
        message="heei"
        timestamp="90 seconds ago"
        pic={`${Data[1].img}/${Math.floor(Math.random() * 1000)}`}
      />
    </div>
  );
}

export default Messages;
