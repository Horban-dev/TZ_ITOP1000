/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import axios from 'axios';

function useExchangeRates(arg) {
  useEffect(() => {
    async function fetchExchangeRates() {
      try {
        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const data = response.data;
        const rates = {};
        data.forEach(currency => {
          rates[currency.cc] = currency.rate;
        });
        arg(rates);
      } catch (error) {
        console.error(error);
      }
    }

    fetchExchangeRates();
  }, []);

  return;
}

function useInputExchangeRates(arg) {
  useEffect(() => {
    async function fetchExchangeRates() {
      try {
        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const data = response.data;
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
        arg(rates);
      } catch (error) {
        console.error(error);
      }
    }

    fetchExchangeRates();
  }, []);

  return;
}

export { useExchangeRates, useInputExchangeRates };
