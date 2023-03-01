import React, {useState} from "react";
import './App.css';

function App() {

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number + number2);

   function addtotal(){
    setTotal(number + number2)
   }
   return (
      <div className="App">
        <h1>Adding Two Numbers</h1>
        <div className="input-numbers">
          <input type="number" placeholder="0" value={number} onChange={e => setNumber(+e.target.value)}/>
          <input type="number" placeholder="0" value={number2} onChange={e => setNumber2(+e.target.value)}/>
        </div>
        <button onClick={addtotal}>Add Numbers</button>
        <h2>{total}</h2>
       </div>
  );
}

export default App;
