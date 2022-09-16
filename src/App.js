import './App.css';
import {useState} from "react";

function App() {
  const [age, setAge] = useState(0);
  const [hrl, setHrl] = useState("???-???");

  const calculate = () => setHrl(`${(220 - age) * 0.65}-${(220 - age) * 0.85}`);

  return (
      <div className="App">
        <h1>Heart rate limits calculator</h1>
        <form>
          <div className="container">
            <label>Age</label><br/>
            <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
          </div>
          <div className="container">
            <label>Heart rate limits</label><br/>
            <output>{hrl}</output>
          </div>
          <button type="button" onClick={calculate}>Calculate</button>
        </form>
      </div>
  );
}

export default App;
