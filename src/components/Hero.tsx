import React from 'react';

const Hero = () => {
  return (
    <div id="hero" data-aos="zoom-in-up" className="relative w-full h-screen flex flex-col items-center justify-center bg-no-repeat bg-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
       <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full mb-4 bg-cover bg-center"
        style={{
          backgroundImage: "url(/capture1.jpg)",
        }}
      ></div>
      
        <p className="text-6xl font-semibold text-center">Web Developer</p>
    </div>
  );
};

export default Hero;

