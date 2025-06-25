import React from "react";
import Button from "../layouts/Button";
import Hero from "../assets/img/hero.jpeg";

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-5 md:px-32 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Main content */}
      <div className="z-10 text-white text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Turf Cricket at its Best
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          Book your game. Day or night. Rain or shine.
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <Button title="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
