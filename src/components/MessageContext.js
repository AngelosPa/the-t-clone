import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

function MessageContext(props) {
  //to get the name of the text user from the url

  const pathname = window.location.pathname;

  const arr = pathname.split("/");
  const personName = arr[arr.length - 1];
  //to find the message history of this name
  const namefinder = props.Data.find((el) => el.name == `${personName}`);
  const personChatHistory = namefinder.msges;
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");

  //to write my messages
  function changeHandle(e) {
    //WE GOT WHAT HE WRITES
    setUserInput(e.target.value);
  }
  function ftiaxetoSubmit(e) {
    e.preventDefault();
    setList((prevState) => [...prevState, userInput.trim()]);
    console.log(list);
    setUserInput("");
  }
  return (
    <div className="message-context">
      <p className="chatscreen-intro">
        YOU MATCHED WITH &nbsp;
        {personName.toUpperCase()}&nbsp; on
        {` ${new Date().getDate()}/ ${new Date().getMonth()} / ${new Date().getFullYear()}`}
      </p>
      {/* to seperate the users texts from the guests texts */}
      {personChatHistory.map((e) => {
        if (personName) {
          return (
            <div className="chatscreen-message">
              <Avatar className="chatscreen-avatar" alt={`${personName}`} />
              <p className="chatscreen-text">{e}</p>
            </div>
          );
        } else {
          return (
            <div className="chatscreen-user-message">
              <p className="chatscreen-user-text">{e}</p>
            </div>
          );
        }
      })}
      <div className="chatscreen-user-message">
        {list.map((e) => (
          <p className="chatscreen-user-text">{e}</p>
        ))}
      </div>
      {/* place to type your thing */}
      <form className="user-input" onSubmit={ftiaxetoSubmit}>
        <input
          value={userInput}
          onChange={changeHandle}
          className="user-input-field"
          placeholder="Type ur message"
          type="text"
        ></input>
        <button type="submit" className="user-input-button">
          SEND
        </button>
      </form>
    </div>
  );
}

export default MessageContext;
