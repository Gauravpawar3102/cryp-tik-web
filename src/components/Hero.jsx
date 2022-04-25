import React from 'react';
import ChartData from './ChartData';
import SingleCoin from './SingleCoin';
function Hero({ data, coinName }) {
  return (
    <div className="Hero-container flex gap-2 h-2/5 m-4 flex-row text-center">
      <div className="hero-left rounded-lg bg-blue-600 w-3/4 h-full">
        <SingleCoin data={data}></SingleCoin>
        <div className="hero-left-bottom m-2 gap-2 flex justify-evenly h-full">
          <div className="hlb-sec-1 h-full bg-slate-300  grow">one</div>
          <div className="hlb-sec-2 h-full bg-slate-300  grow">two</div>
          <div className="hlb-sec-3 h-full bg-slate-400  grow">three</div>
        </div>
      </div>
      <div className="hero-right bg-gray-500 w-1/4 h-full">Right</div>
    </div>
  );
}

export default Hero;
