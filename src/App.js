import './App.css';
import CoinList from './components/CoinList';
import Hero from './components/Hero';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

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
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = data.filter((dataa) =>
    dataa.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App h-full">
      <Hero data={data}></Hero>
      <CoinList
        handleChange={handleChange}
        filteredCoins={filteredCoins}
        data={data}
      ></CoinList>
    </div>
  );
}

export default App;
