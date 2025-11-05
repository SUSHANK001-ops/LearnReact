import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-90 overflow-hidden relative  rounded-4xl ">
      <img
        className="h-full object-cover"
        src={props.img}
        alt=""
      />
    <RightCardContent id ={props.id} tags = {props.tag} intro ={props.intro} />
    </div>
  );
};

export default RightCard;
