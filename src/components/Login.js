import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaRocketchat, FaFireAlt } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

function Login() {
  return (
    <div class="login-page-wrapper">
      <div class="login-page-logo">
        <FaFireAlt id="tinder-icon" />
        <h1>Welcome to OUR Tinder-Clone</h1>
        <p>Please follow these house rules</p>
      </div>
      <div className="login-page-messages">
        <h2>
          <FiCheck className="check-icon" /> Be yourself
        </h2>
        <p>Mak sure your photos, age, and bio are true to who you are.</p>
        <h2>
          <FiCheck className="check-icon" /> Stay Safe
        </h2>
        <p>
          Don't be too quick to give out personal information.{" "}
          <span>Date Safely</span>
        </p>
        <h2>
          <FiCheck className="check-icon" /> Play it cool
        </h2>
        <p>Respect others and treat them as you would like to be treated.</p>
        <h2>
          <FiCheck /> Be proactive
        </h2>
        <p>Always report bad behavior.</p>
      </div>
      <div class="button-wrapper">
        <Link to="/cards" exact>
          <button>LOG IN</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
