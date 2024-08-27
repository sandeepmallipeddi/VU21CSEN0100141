import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [numberId, setNumberId] = useState<string>('p');
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchNumbers = async () => {
    try {
      setError(null);
      console.log(`http://localhost:9876/numbers/${numberId}`)
      const res = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      console.log(res.data)
      setResponse(res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError('Error fetching numbers: ' + err.message);
      } else {
        setError('Unexpected error occurred');
      }
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <div>
        <label htmlFor="numberId">Number Type:</label>
        <select id="numberId" value={numberId} onChange={(e) => setNumberId(e.target.value)}>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
        <button onClick={fetchNumbers}>Fetch Numbers</button>
      </div>
      {error && <div className="error">{error}</div>}
      {response && (
        <div className="response">
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
