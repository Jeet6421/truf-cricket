import React from "react";
import img1 from "../assets/img/img1.jpeg";
import img2 from "../assets/img/img2.jpeg";
import img3 from "../assets/img/img3.jpeg";
import TrainerCard from "../layouts/TrainerCard";

const Trainers = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center mt-10">Our Truf Cafe</h1>

      <div className=" flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
        <TrainerCard img={img1} name="big" />
        <TrainerCard img={img2} name="good" />
        <TrainerCard img={img3} name="nice" />
      </div>
    </div>
  );
};

export default Trainers;
