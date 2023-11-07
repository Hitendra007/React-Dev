import { useState } from 'react'
import InputBox from './Components/InputBox';
import useCurrencyInfo from './hooks/UseCurrencyInfo';
import './App.css'

function App() {
  // State variables
  const [amount, setAmount] = useState(0);  // The amount input
  const [from, setFrom] = useState('usd');   // Currency to convert from
  const [to, setTo] = useState('inr');       // Currency to convert to
  const [convertedAmount, setConvertedAmount] = useState(0); // Converted amount

  // Fetch currency information based on 'from' currency
  const currencyInfo = useCurrencyInfo(from);

  // Get the currency options based on fetched data
  const options = Object.keys(currencyInfo);

  // Swap the 'from' and 'to' currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
  }

  // Convert the amount based on the selected currencies
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5833273/pexels-photo-5833273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              {/* InputBox for 'From' currency */}
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => { setFrom(currency) }}
                selectCurrency={from}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              {/* InputBox for 'To' currency */}
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
