import React from 'react';

const CostInput = ({ handleChange }) => (
  <div>
    <label htmlFor="cost">Item Cost</label>
    <input type="string" id="cost" onChange={handleChange} />
  </div>
);
export default CostInput;
