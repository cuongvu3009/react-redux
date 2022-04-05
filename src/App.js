import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy10 = () => {
    dispatch(actions.addBy10(10));
  };

  const minus10 = () => {
    dispatch(actions.minus10(10));
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
