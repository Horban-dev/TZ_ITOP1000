import React from 'react';

function Input(props) {
  return (
    <input
      type="number"
      placeholder="Enter amount..."
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
