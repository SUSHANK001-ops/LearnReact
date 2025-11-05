import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full rounded-4xl overflow-x-auto w-3/4 flex-nowrap gap-10 flex p-6  ">
      {props.users.map((e ,idx)=>{
        return <RightCard key = {idx} id ={idx+1} img = {e.img} tag = {e.tag} intro ={e.intro}  />
      })}
    </div>
  );
};

export default RightContent;
