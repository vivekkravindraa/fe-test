import React from 'react';
import './App.css';

const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT"
};

function App() {
  const [number, updateNumber] = React.useState(0);

  const [state, dispatch] = React.useReducer((state, action) => {
    switch(action.type) {
      case OPERATIONS.ADD:
        return state + action.payload;
      case OPERATIONS.SUBTRACT:
        return state - action.payload;
      default:
        return state;
    }
  }, 0);

  const add = () => dispatch({ type: OPERATIONS.ADD, payload: number });
  const subtract = () => dispatch({ type: OPERATIONS.SUBTRACT, payload: number });

  const handleNumberChange = e => updateNumber(Number(e.target.value));

  return (
    <div>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>Add</button>
        <button id="subtract" onClick={subtract}>Subtract</button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
}

export default App;
