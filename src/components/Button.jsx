import "./Button.css";

function Button({ onClick, className, label }) {
  return (
    <button className={`calc-button ${className || ""}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
