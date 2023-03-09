import React, { useState, useEffect } from 'react';
import Result from '../result/Result';
import Input from '../input/Input';
import Select from '../select/Select';
import { useInputExchangeRates } from '../hooks/hooks';
import calculateResult from '../utils/utils';
import converter from './Converter.module.css';

function Converter() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [newInputValue, setNewInputValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState(null);

  useInputExchangeRates(setExchangeRates);

  const currencyOptions = Object.keys(exchangeRates);

    useEffect(() => {
        setResult(calculateResult(exchangeRates, fromCurrency, toCurrency, inputValue, newInputValue));
    }, [exchangeRates, fromCurrency, toCurrency, inputValue, newInputValue]);

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
              <Input
                placeholder="Enter amount..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Select
                options={currencyOptions}
                onChange={(e) => setFromCurrency(e.target.value)}
                value={fromCurrency}
              />
              <Input
                placeholder="Enter amount..."
                value={newInputValue}
                onChange={(e) => setNewInputValue(e.target.value)}
              />
              <Select
                options={currencyOptions}
                onChange={(e) => setToCurrency(e.target.value)}
                value={toCurrency}
              />
           </div>
           <div className={converter.buttons}>
              <button onClick={handleClear}>Clear</button>
           </div>
           <Result result={result} />
        </div>
    );
}

export default Converter;