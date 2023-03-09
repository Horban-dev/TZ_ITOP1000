import React, { useState } from "react";
import header from './Header.module.css'
import { useExchangeRates } from "../hooks/hooks";
function Header() {
  const [exchangeRates, setExchangeRates] = useState({});
  useExchangeRates(setExchangeRates)
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
