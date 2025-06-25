import React from "react";
import img from "../assets/img/about.jpeg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4">
          <p>
            Ready to level up your box cricket game? Explore and discover
            top-notch Box Cricket turfs in Ajmer, compare prices and
            conveniently book your preferred venue online. Join the Hudle
            community now!
          </p>

          <p>
            Plan games with your friends and explore premier Box-Cricket turfs
            in Ajmer. Compare facilities, and make seamless bookings on
            Hudle to enjoy your game to the fullest. Don't miss out, start
            playing today!
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
