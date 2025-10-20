import './Display.css';

function Display({ value, operation, previousValue, hasMemory }) {
  // Format the display value
  const formatValue = (val) => {
    if (typeof val === 'string' && val.includes('Error')) {
      return val;
    }
    if (typeof val === 'string' && val.includes('Invalid')) {
      return val;
    }
    
    const strVal = String(val);
    // Handle decimal point at the end
    if (strVal.endsWith('.')) {
      return strVal;
    }
    
    const numVal = parseFloat(strVal);
    if (isNaN(numVal)) return '0';
    
    // Format large numbers
    if (Math.abs(numVal) >= 1e15) {
      return numVal.toExponential(10);
    }
    
    // Remove trailing zeros after decimal point
    if (strVal.includes('.')) {
      return strVal;
    }
    
    return numVal.toLocaleString('en-US', { maximumFractionDigits: 10 });
  };

  return (
    <div className="display-container">
      {hasMemory && <div className="memory-indicator">M</div>}
      <div className="expression">
        {previousValue !== null && operation
          ? `${formatValue(previousValue)} ${operation}`
          : '\u00A0'}
      </div>
      <div className="display">{formatValue(value)}</div>
    </div>
  );
}

export default Display;
