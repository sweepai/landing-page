import React, { useState } from 'react';

const DateInput = () => {
  const [dateRange, setDateRange] = useState('');

  const handleInputChange = (event) => {
    setDateRange(event.target.value);
  };

  return (
    <input 
      type="date" 
      onChange={handleInputChange} 
      value={dateRange}
    />
  );
};

export default DateInput;