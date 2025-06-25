import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../layouts/Button";

const PlansCard = (props) => {
  return (
    <div className="flex flex-col bg-[#222] w-full md:w-1/3 p-5 rounded-lg">
      <h2 className="font-semibold text-center">{props.title}</h2>

      <div className="flex flex-row justify-center items-center">
        <span className="inline-block">
          <MdOutlineAttachMoney size={22} />
        </span>
        <h3 className="font-semibold text-xl inline-block">{props.price}</h3>
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
          </span>
          <p>Premium synthetic turf with professional pitch markings</p>
        </div>
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
          </span>
          <p>Floodlights for evening and night matches</p>
        </div>
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
          </span>
          <p>Complimentary cricket equipment (bats, balls, stumps)</p>
        </div>
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
          </span>
          <p>Drinking water and seating for players & spectators</p>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-4">
        <Button title="Book Now" />
      </div>
    </div>
  );
};

export default PlansCard;
