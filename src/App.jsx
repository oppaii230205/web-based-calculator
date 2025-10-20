import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);

  const handleNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const handleClearEntry = () => {
    setDisplay('0');
    setWaitingForOperand(false);
  };

  const handleBackspace = () => {
    if (!waitingForOperand) {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay === '' || newDisplay === '-' ? '0' : newDisplay);
    }
  };

  const handleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      let newValue = currentValue;

      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '×':
          newValue = currentValue * inputValue;
          break;
        case '÷':
          newValue = inputValue !== 0 ? currentValue / inputValue : 'Error';
          break;
        default:
          break;
      }

      if (newValue === 'Error') {
        setDisplay('Cannot divide by zero');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(true);
        return;
      }

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (operation && previousValue !== null) {
      let result = previousValue;

      switch (operation) {
        case '+':
          result = previousValue + inputValue;
          break;
        case '-':
          result = previousValue - inputValue;
          break;
        case '×':
          result = previousValue * inputValue;
          break;
        case '÷':
          result = inputValue !== 0 ? previousValue / inputValue : 'Error';
          break;
        default:
          break;
      }

      if (result === 'Error') {
        setDisplay('Cannot divide by zero');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(true);
        return;
      }

      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(display);
    if (previousValue !== null && operation) {
      // Calculate percentage of previous value
      const percentage = (previousValue * value) / 100;
      setDisplay(String(percentage));
    } else {
      // Just divide by 100
      setDisplay(String(value / 100));
    }
  };

  const handleSquareRoot = () => {
    const value = parseFloat(display);
    if (value >= 0) {
      setDisplay(String(Math.sqrt(value)));
    } else {
      setDisplay('Invalid input');
    }
    setWaitingForOperand(true);
  };

  const handleSquare = () => {
    const value = parseFloat(display);
    setDisplay(String(value * value));
    setWaitingForOperand(true);
  };

  const handleReciprocal = () => {
    const value = parseFloat(display);
    if (value !== 0) {
      setDisplay(String(1 / value));
    } else {
      setDisplay('Cannot divide by zero');
    }
    setWaitingForOperand(true);
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  const handleMemoryRecall = () => {
    setDisplay(String(memory));
    setWaitingForOperand(true);
  };

  const handleMemoryAdd = () => {
    setMemory(memory + parseFloat(display));
    setWaitingForOperand(true);
  };

  const handleMemorySubtract = () => {
    setMemory(memory - parseFloat(display));
    setWaitingForOperand(true);
  };

  const handleMemoryStore = () => {
    setMemory(parseFloat(display));
    setWaitingForOperand(true);
  };

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h1>Calculator</h1>
      </div>
      <Display 
        value={display} 
        operation={operation}
        previousValue={previousValue}
        hasMemory={memory !== 0}
      />
      <ButtonPanel
        onNumber={handleNumber}
        onDecimal={handleDecimal}
        onClear={handleClear}
        onClearEntry={handleClearEntry}
        onBackspace={handleBackspace}
        onSign={handleSign}
        onOperation={performOperation}
        onEquals={handleEquals}
        onPercentage={handlePercentage}
        onSquareRoot={handleSquareRoot}
        onSquare={handleSquare}
        onReciprocal={handleReciprocal}
        onMemoryClear={handleMemoryClear}
        onMemoryRecall={handleMemoryRecall}
        onMemoryAdd={handleMemoryAdd}
        onMemorySubtract={handleMemorySubtract}
        onMemoryStore={handleMemoryStore}
      />
    </div>
  );
}

export default App;
