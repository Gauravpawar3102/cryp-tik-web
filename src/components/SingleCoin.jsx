import React from 'react';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';

function SingleCoin({ children, data }) {
  // console.log(data);
  return (
    <div className="hero-left-top text-2xl bg-white m-2 flex items-center justify-between  ">
      <div className="hero-coin p-4 gap-8 w-1/3   items-center flex justify-start ">
        <img className="h-8 w-8" src={data.image} alt="img" />
        <div className="hero-coin-name ">{data.name}</div>
        <div className="hero-coin-symbol  text-xl">{data.symbol}</div>
      </div>
      <div className="hero-coin-price ">${data.current_price}</div>
      {data.price_change_percentage_24h > 0 ? (
        <div className="hero-coin-price-change text-green-400 flex items-center">
          <div className="hero-price-change-icon">
            <TiArrowSortedUp></TiArrowSortedUp>
          </div>
          <div className="hero-price-change-percentage">
            {data.price_change_percentage_24h.toFixed(2)}
          </div>
        </div>
      ) : (
        <div className="hero-coin-price-change text-red-400 flex items-center">
          <div className="hero-price-change-icon">
            <TiArrowSortedDown></TiArrowSortedDown>
          </div>
          <div className="hero-price-change-percentage">
            {data.price_change_percentage_24h}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

export default SingleCoin;
