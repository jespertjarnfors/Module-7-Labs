import { useState } from "react";
import { useAPI } from "./hooks/useAPI";
import Emoji from "./Emoji";
import { EmojiContextProvider } from "./EmojiContextProvider";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {

  const [currency, setCurrency] = useState(currencies[0]);
  // Setting a state for the data to be updated accordingly by the useEffect.
  const [data] = useAPI('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies='+ currency, currency);

  const options = currencies.map((curr) => (<option value={curr} key={curr}> {curr}</option>));

  return (
    <EmojiContextProvider>
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <h4>The price of Bitcoin is: ${data} {currency}</h4>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
    <Emoji></Emoji>
    </div>
    </EmojiContextProvider>
  );
}

export default BitcoinRates
