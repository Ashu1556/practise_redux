import React from "react";
import "./card.css";

const Card = ({ image, price, title, rating, category }) => {
  return (
    <div className="Productitem">
      <div className="productdata1">
        <div>{category}</div>
        <img src={image} height={200} width={200} alt="" />
        <div>
          <b>Price:</b>
          {price}
        </div>
        <div>
          <b>Title:</b>
          {title}
        </div>
        <div>
          <b>Rating:</b>
          {rating}
        </div>
      </div>
    </div>
  );
};

export default Card;
