import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function CardItem(props) {
  return (
    <>
      <li className="cards__item cards__item__link">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img className="cards__item__img" alt="Travel" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <button
            onClick={() => this.props.add(CardItem.id)}
            style={{
              float: "right",
              background: "transparent",
              border: "none",
            }}
          >
            <FaHeart size={20} style={{ color: "red" }} />
          </button>
          <h5 className="cards__item__text">{props.text}</h5>
          <h5 className="cards__item__texts">{props.text1}</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
