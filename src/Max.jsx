import React, { useState, useEffect } from 'react';
import axios from "axios";

const Max = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setPrices(res.data)
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const topPrices = [];
  const findTopPrices = () => {
    for(let i = 0; i < prices.length; i++) {
      if(prices[i].current_price > 206){
        topPrices.push(prices[i])
      }
    }
    return topPrices;
  }
  findTopPrices();

  return (
    <div className='current'>
      <h1>Top 3 Current Prices:</h1>
      {topPrices.map((price, index) => {
        return (
          <div key={index}>
            <h2>{price.name}: <span>{price.current_price}</span></h2>
          </div>
      )
      })}
    </div>
  )
}

export default Max;