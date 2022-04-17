import './App.css';
import CoinList from './components/CoinList';
import Hero from './components/Hero';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        let result = res.data;
        setData(result);
        // console.log(result);
      });
  }

  return (
    <div className="App h-full">
      <Hero data={data}></Hero>
      <CoinList data={data}></CoinList>
    </div>
  );
}

export default App;
