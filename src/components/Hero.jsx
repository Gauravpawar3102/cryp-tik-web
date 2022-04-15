import React from 'react';

function Hero() {
  return (
    <div className="Hero-container flex h-1/3 m-4 flex-row">
      <div className="hero-left bg-blue-200 w-3/4 h-full">
        <div className="hero-left-top">top</div>
        <div className="hero-left-bottom flex justify-evenly">
          <div className="hlb-sec-1">one</div>
          <div className="hlb-sec-1">two</div>
          <div className="hlb-sec-1">three</div>
        </div>
      </div>
      <div className="hero-right bg-gray-500 w-1/4 h-full">Right</div>
    </div>
  );
}

export default Hero;
