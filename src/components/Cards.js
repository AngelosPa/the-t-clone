import React, { useState } from "react";
import Data from "../Data.json";
import { IconButton } from "@material-ui/core/";
import TinderCard from "react-tinder-card";
import { FaStar, FaRedo, FaBolt, FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
function Cards() {
  //TINDER CARDS SWIPING PART
  const onSwipe = (direction) => {
    console.log(direction);
    console.log("You swiped: " + direction);
  };
  //states for the buttons effect
  const [pic, setPic] = useState(false);
  const [heartpic, setHeartpic] = useState(false);
  const [starpic, setStarpic] = useState(false);
  const [dataArr, setDataArr] = useState(Data);
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  //refresh button
  function updateProfil(id, arr, counter) {
    setDataArr(arr.filter((item) => item.id !== id));
  }
  //delete button-swipe left
  function deleteProfil(id, arr, counter) {
    setDataArr(arr.filter((item) => item.id !== id));
    setPic(true);
    setTimeout(() => {
      setPic(false);
    }, 500);
  }
  //star (superlike) button-swipe up
  function starProfile(id, arr) {
    setDataArr(arr.filter((item) => item.id !== id));
    setStarpic(true);
    setTimeout(() => {
      setStarpic(false);
    }, 500);
  }
  //heart(like) button-swipe right
  function heartProfile(id, arr) {
    setDataArr(arr.filter((item) => item.id !== id));
    setHeartpic(true);
    setTimeout(() => {
      setHeartpic(false);
    }, 500);
  }

  var cartData = dataArr.map((obj) => {
    const { img, name, age, id } = obj;
    console.log(id);
    const stylepic = `url(${Data[1].img}/${Math.floor(Math.random() * 1000)})`;
    //git pull origin master
    return (
      <TinderCard className="card-wrapper">
        <div
          className="swipe"
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["right", "left"]}
          preventSwipe={["up", "down"]}
        >
          <div
            className={
              pic
                ? "profil-img mytranslatex"
                : heartpic
                ? "profil-img myhearttranslatex"
                : starpic
                ? "profil-img mystartranslatex"
                : "profil-img"
            }
            style={
              name !== "Hamza"
                ? {
                    backgroundImage: `${stylepic}`,
                  }
                : {
                    backgroundImage: `url(${img})`,
                  }
            }
          >
            <h1>{`${name} ${age}`}</h1>
          </div>
          <div className="buttons-swipe">
            <IconButton className="swipe-redo">
              <FaRedo
                onClick={() => updateProfil(1, dataArr)}
                onTouchStart={() => updateProfil(1, dataArr)}
              />
            </IconButton>
            <IconButton>
              <AiOutlineClose
                onClick={() => deleteProfil(id, dataArr)}
                onTouchStart={() => deleteProfil(id, dataArr)}
                className="swipe-close"
              />
            </IconButton>
            <IconButton
              onClick={() => starProfile(id, dataArr)}
              onTouchStart={() => starProfile(id, dataArr)}
              className="swipe-star"
            >
              <FaStar />
            </IconButton>
            <IconButton className="swipe-heart">
              <FaHeart
                onClick={() => heartProfile(id, dataArr)}
                onTouchStart={() => heartProfile(id, dataArr)}
                className="swipe-close"
              />
            </IconButton>
            <IconButton className="swipe-bolt">
              <FaBolt />
            </IconButton>
          </div>
        </div>
      </TinderCard>
    );
  });
  return cartData;
}
export default Cards;
