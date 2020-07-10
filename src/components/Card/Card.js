import React from "react";
import "./Card.css";

function Card({title, img, institution, area, boughtCount, price, infoText}) {
    return (
      <div className="flex p-2 justify-center sm:inline md-inline lg:inline xl:inline">
        <div className="rounded-none overflow-hidden shadow-lg bg-white cursor-pointer card parent">
            <img className="w-full h-64" src={img} alt="img-background"/>
            <div className="child">
              <p className="text-lg text-center text-white">{infoText}</p>
          </div>
          <div className="px-6 py-4">
            <p className=" text-xl mb-2 text-gray-700 truncate">{title}</p>
            <p className="text-base text-blue truncate">{institution} </p>
            <p className="text-lg text-gray-600 mr-2">{area}</p>
          <div className="grid grid-rows-1 grid-flow-col">
            <p className="row-start-1 py-6 text-sm text-gray-700">{boughtCount} bought</p>
            <div className="row-start-1 pb-3">
                <p className="text-sm text-blue text-right">from</p>
                <p className="text-3xl text-blue text-right">${price}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
} 

export default Card;