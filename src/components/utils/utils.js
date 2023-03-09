function calculateResult(exchangeRates, fromCurrency, toCurrency, inputValue, newInputValue) {
    if (fromCurrency && toCurrency) {
        if (inputValue) {
        return (exchangeRates[fromCurrency] / exchangeRates[toCurrency] * inputValue).toFixed(2);
    } else if (newInputValue) {
        return (exchangeRates[toCurrency] / exchangeRates[fromCurrency] * newInputValue).toFixed(2);
        }
    }
    return null;
}

export default calculateResult;