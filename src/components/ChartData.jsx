import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
// const pdata = [

//   {
//     name: 'Python',
//     student: 13,
//     fees: 10,
//   },
//   {
//     name: 'Javascript',
//     student: 15,
//     fees: 12,
//   },
//   {
//     name: 'PHP',
//     student: 5,
//     fees: 10,
//   },
//   {
//     name: 'Java',
//     student: 10,
//     fees: 5,
//   },
//   {
//     name: 'C#',
//     student: 9,
//     fees: 4,
//   },
//   {
//     name: 'C++',
//     student: 10,
//     fees: 8,
//   },
// ];

function ChartData() {
  const [chartjsData, setChartjsData] = useState([]);

  useEffect(() => {
    fetchChartData();
  }, []);
  let dataArr = [];

  const coinPrice = chartjsData;

  dataArr.push({ coinPrice });
  function fetchChartData() {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily'
      )
      .then((res) => {
        let chartResult = res.data;

        setChartjsData(
          chartResult.prices.map((arr) => {
            return {
              CoinPrice: arr[1],
            };
          })
        );
        console.log(chartResult.prices.map((arr) => arr[1]));
      })
      .catch((error) => {
        console.log(error);
      });
    let dateObj = new Date();
    console.log(dateObj.toLocaleDateString('en-UK'));
    console.log(dataArr);
  }
  return (
    <div className="chart-container">
      <div className="w-full text-center">chart.js</div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart className="bg-slate-700" data={chartjsData}>
          {console.log(chartjsData)}
          <Line type="monotone" className=" text-white" dataKey="CoinPrice" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartData;
