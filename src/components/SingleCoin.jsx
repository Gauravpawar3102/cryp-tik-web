import React from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';

function SingleCoin({ children, data }) {
  // console.log(data);
  return (
    <div className="hero-left-top text-2xl bg-white m-2 flex items-center justify-evenly a">
      <div className="hero-coin-icon">
        <img className="h-8 w-8" src={data.image} alt="img" />
      </div>
      <div className="hero-coin-name ">{data.id}</div>
      <div className="hero-coin-symbol text-xl">{data.symbol}</div>
      <div className="hero-coin-price ">{data.current_price}</div>
      <div className="hero-coin-price-change text-green-400 flex items-center">
        <div className="hero-price-change-icon">
          <TiArrowSortedUp></TiArrowSortedUp>
        </div>
        <div className="hero-price-change-percentage">
          {data.price_change_percentage_24h}
        </div>
      </div>
      {children}
    </div>
  );
}

export default SingleCoin;
