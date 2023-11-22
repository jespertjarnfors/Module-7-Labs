import { useState, useEffect } from "react";

export function useAPI(url, currency) {

  const [data, setData] = useState(null);

  /* Setting a state for the data to be updated accordingly by the useEffect. */
  useEffect(() => {
    if (url) {
      let ignore = false;

      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          /* Using the flag to verify that the data should be updated,
          then retrieving the data from the object by using the state from currency. */
          if (!ignore) setData(responseData.bitcoin[currency.toLowerCase()]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          /* Simple error handling if the fetch would fail. */
        });

      return () => {
        ignore = true;
        console.log('cleanup effect');
        /* Clean-up effect. */
      };
    }
  }, [url, currency]);
  // Both the url and currency now needed as a depedency.

  return [data];
}
