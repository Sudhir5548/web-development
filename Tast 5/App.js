import React, { useState } from 'react';
import './App.css';

const Button = ({ onClick, value }) => {
  return (
    <button className="button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
    </div>
  );
};

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const calculation = eval(input); // Note: Using eval can be dangerous in real applications
      setResult(calculation);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button onClick={handleButtonClick} value="1" />
        <Button onClick={handleButtonClick} value="2" />
        <Button onClick={handleButtonClick} value="3" />
        <Button onClick={handleButtonClick} value="+" />
        <Button onClick={handleButtonClick} value="4" />
        <Button onClick={handleButtonClick} value="5" />
        <Button onClick={handleButtonClick} value="6" />
        <Button onClick={handleButtonClick} value="-" />
        <Button onClick={handleButtonClick} value="7" />
        <Button onClick={handleButtonClick} value="8" />
        <Button onClick={handleButtonClick} value="9" />
        <Button onClick={handleButtonClick} value="*" />
        <Button onClick={handleButtonClick} value="0" />
        <Button onClick={handleButtonClick} value="/" />
        <Button onClick={handleClear} value="C" />
        <Button onClick={handleCalculate} value="=" />
      </div>
    </div>
  );
};

export default App;
