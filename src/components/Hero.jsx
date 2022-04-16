import React from 'react';
import SingleCoin from './SingleCoin';
function Hero() {
  return (
    <div className="Hero-container flex gap-2 h-2/5 m-4 flex-row text-center">
      <div className="hero-left rounded-lg bg-blue-200 w-3/4 h-full">
        <SingleCoin></SingleCoin>
        <div className="hero-left-bottom m-2 gap-2 flex justify-evenly h-3/4">
          <div className="hlb-sec-1 h-full bg-slate-400 grow ">one</div>
          <div className="hlb-sec-2 h-full bg-slate-300  grow">two</div>
          <div className="hlb-sec-3 h-full bg-slate-400  grow">three</div>
        </div>
      </div>
      <div className="hero-right bg-gray-500 w-1/4 h-full">Right</div>
    </div>
  );
}

export default Hero;
