import './ButtonPanel.css';
import Button from './Button';

function ButtonPanel({
  onNumber,
  onDecimal,
  onClear,
  onClearEntry,
  onBackspace,
  onSign,
  onOperation,
  onEquals,
  onPercentage,
  onSquareRoot,
  onSquare,
  onReciprocal,
  onMemoryClear,
  onMemoryRecall,
  onMemoryAdd,
  onMemorySubtract,
  onMemoryStore,
}) {
  return (
    <div className="button-panel">
      {/* Memory Row */}
      <div className="button-row memory-row">
        <Button onClick={onMemoryClear} className="memory-btn" label="MC" />
        <Button onClick={onMemoryRecall} className="memory-btn" label="MR" />
        <Button onClick={onMemoryAdd} className="memory-btn" label="M+" />
        <Button onClick={onMemorySubtract} className="memory-btn" label="M-" />
        <Button onClick={onMemoryStore} className="memory-btn" label="MS" />
      </div>

      {/* Row 1: Functions */}
      <div className="button-row">
        <Button onClick={onPercentage} className="function-btn" label="%" />
        <Button onClick={onClearEntry} className="function-btn" label="CE" />
        <Button onClick={onClear} className="function-btn" label="C" />
        <Button onClick={onBackspace} className="function-btn" label="⌫" />
      </div>

      {/* Row 2: Functions and operations */}
      <div className="button-row">
        <Button onClick={onReciprocal} className="function-btn" label="1/x" />
        <Button onClick={onSquare} className="function-btn" label="x²" />
        <Button onClick={onSquareRoot} className="function-btn" label="√x" />
        <Button onClick={() => onOperation('÷')} className="operator-btn" label="÷" />
      </div>

      {/* Row 3: Numbers 7-9 and multiply */}
      <div className="button-row">
        <Button onClick={() => onNumber(7)} className="number-btn" label="7" />
        <Button onClick={() => onNumber(8)} className="number-btn" label="8" />
        <Button onClick={() => onNumber(9)} className="number-btn" label="9" />
        <Button onClick={() => onOperation('×')} className="operator-btn" label="×" />
      </div>

      {/* Row 4: Numbers 4-6 and minus */}
      <div className="button-row">
        <Button onClick={() => onNumber(4)} className="number-btn" label="4" />
        <Button onClick={() => onNumber(5)} className="number-btn" label="5" />
        <Button onClick={() => onNumber(6)} className="number-btn" label="6" />
        <Button onClick={() => onOperation('-')} className="operator-btn" label="-" />
      </div>

      {/* Row 5: Numbers 1-3 and plus */}
      <div className="button-row">
        <Button onClick={() => onNumber(1)} className="number-btn" label="1" />
        <Button onClick={() => onNumber(2)} className="number-btn" label="2" />
        <Button onClick={() => onNumber(3)} className="number-btn" label="3" />
        <Button onClick={() => onOperation('+')} className="operator-btn" label="+" />
      </div>

      {/* Row 6: Sign, 0, decimal, equals */}
      <div className="button-row">
        <Button onClick={onSign} className="number-btn" label="±" />
        <Button onClick={() => onNumber(0)} className="number-btn" label="0" />
        <Button onClick={onDecimal} className="number-btn" label="." />
        <Button onClick={onEquals} className="equals-btn" label="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
