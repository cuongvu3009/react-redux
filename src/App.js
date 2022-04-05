import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  };

  const decrement = () => {
    dispatch({ type: 'DEC' });
  };

  const addBy10 = () => {
    dispatch({ type: 'ADD', payload: 10 });
  };

  const minus10 = () => {
    dispatch({ type: 'MINUS', payload: 10 });
  };
  return (
    <div className='App'>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => addBy10()}>Add 10</button>
      <button onClick={() => minus10()}>Minus 10</button>
    </div>
  );
}

export default App;
