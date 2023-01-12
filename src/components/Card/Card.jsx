import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{borderColor: props.color}}> 
      <img src={props.emoji} alt="" />
      <span>{props.heading}</span>
      <span>{props.detail.map( (ob) => {
        return(
          <div>{ob}<hr/></div>
        )
      })}</span>
       
    </div>
  );
};

export default Card;
