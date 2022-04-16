import React from 'react';

function DataModal() {
  return (
    <div className="modal-container m-2 h-screen w-screen flex flex-col text-center">
      <div className="modal-top-meta-data flex  justify-center items-center   gap-4 bg-violet-300 h-8 ">
        <div className="modal-icon">$</div>
        <div className="modal-coin-name">Bitcoin</div>
        <div className="modal-coin-symbol">BTC</div>
      </div>
      <div className="graph-container h-1/4 w-screen flex justify-center m-4">
        <div className="modal-middle-graph h-full  w-1/3  bg-slate-400">
          graph
        </div>
      </div>
      <h2 className="market-stats font-bold ">Market Stats</h2>
      <div className="modal-bottom-market-stats flex justify-around border-2 border-black">
        <div className="modal-market-cap">$1.9T</div>
        <div className="modal-volume">$0.2T</div>
        <div className="modal-circulating-supply">$0.259T</div>
      </div>
    </div>
  );
}

export default DataModal;
