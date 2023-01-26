import React from "react";

interface Coffee {
  title: string;
  description: string;
  image: any;
}

function VerticalCard(props: Coffee) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg box-border h-80 w-80 p-4 border-6  bg-amber-100">
      <img className="scale-100 h-20 w-max" src={props.image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default VerticalCard;
