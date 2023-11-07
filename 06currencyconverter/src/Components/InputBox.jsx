import React from 'react';
import { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Generate a unique ID for the input element using useId
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        {/* Label for the input */}
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        {/* Input element for the amount */}
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="Number" // Input type set to "Number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            // Call onAmountChange with the new numeric value
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        {/* Label for selecting currency */}
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        {/* Dropdown to select currency */}
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            // Call onCurrencyChange with the selected currency
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((c) => (
            // Mapping through available currency options to create dropdown options
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
