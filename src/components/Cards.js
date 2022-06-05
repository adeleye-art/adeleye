import React from "react";
import "./CardsStyle.css";
import CardItem from "./CardItem";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/download.jpg"
              text="john doe"
              text1="Hire"
              label="#100,000"
            />
            <CardItem
              src="images/download.png"
              text="doe john "
              text1="Hire"
              label="#200,000"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/images.jpg"
              text="john john"
              text1="Hire"
              label="#150,000"
            />
            <CardItem
              src="images/images.jpg"
              text="reboll"
              text1="Hire"
              label="#100,000"
            />
            <CardItem
              src="images/images.jpg"
              text="Ride doe"
              text1="Hire"
              label="100,000"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
