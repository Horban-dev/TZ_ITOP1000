import React, { useState, useEffect } from "react";
import axios from "axios";
import header from './Header.module.css'
function Header() {
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        const rates = {};
        response.data.forEach((rate) => {
          rates[rate.cc] = rate.rate;
        });
        setExchangeRates(rates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <header className={header.header}> 
      <h1>Курс валют</h1>
      <div className={header.container}>
        <p>USD: {exchangeRates.USD}</p>
        <p>EUR: {exchangeRates.EUR}</p>
        <p>PLN: {exchangeRates.PLN}</p>
      </div>
    </header>
  );
}
export default Header;  
