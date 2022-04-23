import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import SingleCoin from './SingleCoin';

function CoinList({ data, handleChange, filteredCoins, handleClick }) {
  return (
    <div className="coinlist-container h-full">
      <div className="search-bar flex items-center justify-center m-4">
        <input
          type="text"
          className="text-black placeholder-black p-2 bg-red-300 "
          placeholder="Search..."
          onChange={handleChange}
          onKeyPress={(e) => e.key === 'Enter' && handleClick()}
        />
        <div className="search-coinList ">
          <BiSearchAlt
            className="bg-blue-300 text-2xl"
            onClick={handleClick}
          ></BiSearchAlt>
        </div>
      </div>
      <div className="crypto-data-list h-full bg-orange-300 ">
        <div className="meta-data-ofcoin flex items-center gap-4 justify-evenly">
          <div className="Token bg-gray-200 px-2 m-2 ">Token</div>
          <div className="symbol ml-4 bg-gray-200 px-2 m-2 ">Symbol</div>
          <div className="price bg-gray-200 px-2 m-2 ">$ price</div>
          <div className="24Hr bg-gray-200 px-2 m-2 ">24Hr</div>
          <div className="Market-Cap bg-gray-200 px-2 m-2 ">Market Cap</div>
        </div>
        {filteredCoins.map((dataa) => {
          return (
            <SingleCoin data={dataa} key={dataa.id}>
              <div className="component-market-cap">
                {dataa.market_cap.toLocaleString()}
              </div>
            </SingleCoin>
          );
        })}
      </div>
    </div>
  );
}

export default CoinList;
