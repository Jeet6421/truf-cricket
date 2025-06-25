import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[url('./assets/img/hero.jpeg')] bg-cover bg-no-repeat bg-center relative"
      id="home"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="relative z-10 w-full flex flex-col items-center md:items-start md:pl-32 px-5 py-16">
        <h1 className="text-white font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center md:text-left drop-shadow-lg">
          Play Cricket Like Never Before
        </h1>
        <p className="mt-6 text-gray-200 text-lg sm:text-xl md:text-2xl max-w-xl text-center md:text-left">
          Welcome to{" "}
          <span className="text-brightRed font-bold"> Turf Arena</span>
          —your premier destination for world-class turf cricket. Enjoy
          perfectly maintained pitches, advanced lighting for day and night
          matches, and a vibrant community of cricket lovers. Whether you’re a
          beginner or a seasoned player, book your slot, join a league, or host
          your own tournament!
        </p>
        <ul className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-xl list-disc pl-5 text-left">
          <li>State-of-the-art synthetic turf pitches</li>
          <li>Online slot booking and instant confirmations</li>
          <li>Coaching sessions for all ages</li>
          <li>Friendly matches, leagues, and tournaments</li>
          <li>Refreshments and changing facilities available</li>
        </ul>
        <div className="mt-10 flex justify-center md:justify-start w-full">
          <Button title="Book Your Slot Now" />
        </div>
      </div>
    </section>
  );
};

export default Home;
