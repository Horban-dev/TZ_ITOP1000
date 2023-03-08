import React, { useState, useEffect } from 'react';
import Result from './Result';
import converter from './Converter.module.css';

function Converter() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [newInputValue, setNewInputValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState(null);
  
  useEffect(() => {
    async function fetchExchangeRates() {
      const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
      const data = await response.json();
      const rates = {
        USD: null,
        UAH: 1,
        EUR: null,
        PLN: null,
      };
      data.forEach(currency => {
        if (currency.cc === 'USD' || currency.cc === 'EUR' || currency.cc === 'PLN') {
          rates[currency.cc] = currency.rate;
        }
      });
      setExchangeRates(rates);
    }

    fetchExchangeRates();
  }, []);

  const currencyOptions = Object.keys(exchangeRates);

  useEffect(() => {
    if (fromCurrency && toCurrency && inputValue) {
      setResult((exchangeRates[fromCurrency] / exchangeRates[toCurrency] * inputValue).toFixed(2));
    }
  }, [exchangeRates, fromCurrency, toCurrency, inputValue]);
  

  useEffect(() => {
    if (fromCurrency && toCurrency && newInputValue) {
      setResult((exchangeRates[toCurrency] / exchangeRates[fromCurrency] * newInputValue).toFixed(2));
    }
  }, [exchangeRates, fromCurrency, toCurrency, newInputValue]);
  

  const handleClear = () => {
    setInputValue('');
    setNewInputValue('');
    setFromCurrency('');
    setToCurrency('');
    setResult(null);
  };

  return (
    <div>
      <h1 className={converter.title}>Value Calculator</h1>
      <div className={converter.container}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter amount..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="form-select"
          aria-label="Convert from..."
          value={fromCurrency}
        >
          <option value=""/>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Enter amount..."
          value={newInputValue}
          onChange={(e) => setNewInputValue(e.target.value)}
        />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="form-select"
          aria-label="Convert to..."
          value={toCurrency}
        >
          <option value=""/>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className={converter.buttons}>
        <button onClick={handleClear} >Clear</button>
    </div>
    <Result result={result}/>
    </div>
  )}
  export default Converter;

