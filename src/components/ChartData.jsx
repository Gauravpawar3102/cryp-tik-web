import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  // Legend,
  Tooltip,
} from 'recharts';

function ChartData({ coinName }) {
  const [chartjsData, setChartjsData] = useState([]);

  useEffect(() => {
    fetchChartData();
  }, [coinName]);
  let dataArr = [];

  const coinPrice = chartjsData;

  dataArr.push({ coinPrice });
  function fetchChartData() {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=90&interval=daily`
      )
      .then((res) => {
        let chartResult = res.data;

        setChartjsData(
          chartResult.prices.map((arr) => {
            return {
              CoinPrice: arr[1].toFixed(2),
            };
          })
        );
        // console.log(chartResult.prices.map((arr) => arr[1]));
      })
      .catch((error) => {
        console.log(error);
      });
    // let dateObj = new Date();
    // console.log(dateObj.toLocaleDateString('en-UK'));
    // console.log(dataArr);
  }
  return (
    <div className="chart-container">
      {/* <div className="w-full text-center p-4 capitalize">{`${coinName} chart`}</div> */}
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart className="bg-slate-700" data={chartjsData}>
          <XAxis dataKey="CoinPrice" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" className=" text-white" dataKey="CoinPrice" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartData;
