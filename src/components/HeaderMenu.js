import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FaUserAlt,
  FaRocketchat,
  FaFireAlt,
  FaChevronLeft,
} from "react-icons/fa";

import { IconButton } from "@material-ui/core/";
{
  /*  use for the pics object-fit :contain, it will save u; */
}

function HeaderMenu({ backButton }) {
  //react hook that work with rooter and behaves like toggle in DOM
  //https://reactrouter.com/web/api/Hooks
  const history = useHistory();
  return (
    <div className="header-menu">
      {/* to change the icon to back if we pass this prop */}
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <FaChevronLeft />
        </IconButton>
      ) : (
        // link to profile component
        //<Link to="/profile">
        <div onClick={() => history.push("/profile")}>
          <IconButton>
            <FaUserAlt />
          </IconButton>
        </div>
        // </Link>
      )}
      <Link to="/cards">
        <IconButton>
          <FaFireAlt id="tinder-icon" />
        </IconButton>
      </Link>
      <Link to="/messages">
        <IconButton>
          <FaRocketchat />
        </IconButton>
      </Link>
    </div>
  );
}

export default HeaderMenu;
