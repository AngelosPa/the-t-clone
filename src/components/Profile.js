import React from "react";
import Data from "../Data.json";
import { ImLocation2 } from "react-icons/im";
import { MdWork, MdSchool } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "./Slider";

function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-information-wrapper">
        <Link to="/cards">
          <FaChevronLeft className="profile-back" />
        </Link>

        <button className="profile-edit">Edit Info</button>


        <Slider slides={Data[0].profileImg} />

        {/* <img className="profile-img" src={Data[0].img} alt="Profile Picture" /> */}

        {/* <Slider /> */}

        {/*<img className="profile-img" src={Data[0].img} alt="Profile Picture" />*/}


        <div class="profile-main-information">
          <h2 className="profile-name">
            {Data[0].name}, {Data[0].age} years old
          </h2>

          <h5 className="profile-info">
            <ImLocation2 />
            <p>{Data[0].location}</p>
          </h5>

          <h5 className="profile-info">
            <MdWork />
            <p>{Data[0].occupation}</p>
          </h5>

          <h5 className="profile-info">
            <MdSchool />
            <p>{Data[0].education}</p>
          </h5>
        </div>
      </div>

      <hr className="divider" />

      <div className="profile-text">
        <h3 className="profile-text-title">About me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          rem?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate doloribus nobis similique quibusdam perspiciatis dolorem
          ipsam mollitia eius asperiores. Ea facere at aliquid omnis.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vel
          deserunt magnam consequatur officiis eos.
        </p>
      </div>
    </div>
  );
}

export default Profile;
