import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

//the avatar gives them the form of profile pics ,if they get a pic link shows the pic if not shows the icon
function Message(props) {
  return (
    <Link to={`/messages/${props.name}`}>
      <div className="message">
        <Avatar className="message_image" alt={props.name} src={props.pic} />
        <div className="message-details">
          <h2>{props.name}</h2>
          <p>{props.message}</p>
        </div>
        <p className="timestamp">{props.timestamp}</p>
      </div>
    </Link>
  );
}

export default Message;
