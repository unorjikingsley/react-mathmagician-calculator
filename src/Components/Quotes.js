import { useState, useEffect, React } from 'react';

function Quotes() {
  const link = 'https://api.api-ninjas.com/v1/quotes?category=computers';

  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(link, {
          headers: { 'X-Api-Key': '37hwk0NY0MV/Y+OfVef2kA==0yLjfFQ2mZSqG3z5' },
        });
        if (!res.ok) {
          throw Error('Can\'t fetch data try again');
        }
        const json = await res.json();
        setQuotes(json);
        setIsLoading(false);
        return json;
      } catch (err) {
        setIsLoading(false);
        setErrorState(true);
        return err;
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {isLoading && <h2>Loading...</h2>}
      {quotes && quotes.map((quotes) => (
        <li key={quotes.author}>
          <h2>{quotes.author}</h2>
          <p>{quotes.quote}</p>
        </li>
      ))}
      {errorState && <h2>Failed to fetch Data</h2>}
    </ul>
  );
}

export default Quotes;
