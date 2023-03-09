import React from 'react';

function Select({ options, onChange, value }) {
  return (
    <select
      onChange={onChange}
      className="form-select"
      aria-label="Convert from..."
      value={value}
    >
      <option value=""/>
      {options.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}

export default Select;
