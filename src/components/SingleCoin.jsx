import React from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import { GrBitcoin } from 'react-icons/gr';

function SingleCoin({ children }) {
  return (
    <div className="hero-left-top text-2xl bg-white m-2 flex items-center justify-evenly a">
      <div className="hero-coin-icon">
        <GrBitcoin className="text-yellow-300 text-2xl"></GrBitcoin>
      </div>
      <div className="hero-coin-name ">Bitcoin</div>
      <div className="hero-coin-symbol text-xl">BTC</div>
      <div className="hero-coin-price ">$49,000</div>
      <div className="hero-coin-price-change text-green-400 flex items-center">
        <div className="hero-price-change-icon">
          <TiArrowSortedUp></TiArrowSortedUp>
        </div>
        <div className="hero-price-change-percentage">3.40%</div>
      </div>
      {children}
    </div>
  );
}

export default SingleCoin;
