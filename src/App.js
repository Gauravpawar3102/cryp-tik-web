import './App.css';
import CoinList from './components/CoinList';
import Hero from './components/Hero';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ChartData from './components/ChartData';
import Login from './components/Login';

function App() {
  const [data, setData] = useState([]);
  const [heroData, setHeroData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchChart, setSearchChart] = useState('bitcoin');

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
        let heroResult = res.data[0];
        setData(result);
        setHeroData(heroResult);
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  const handleClick = () => {
    setSearchChart(search.toLowerCase());
    // console.log(searchChart);
  };
  const filteredCoins = data.filter((dataa) =>
    dataa.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App h-full w-screen">
      {/* <Hero coinName={searchChart} data={heroData}></Hero>
      <ChartData coinName={searchChart} />
      <CoinList
        handleChange={handleChange}
        handleClick={handleClick}
        filteredCoins={filteredCoins}
        data={heroData}
      ></CoinList> */}
      <Login></Login>
    </div>
  );
}

export default App;
