import logo from './logo.svg';
import './App.css';

import CounterTwo from './components/reducerhook/CounterTwo';
import CounterThree from './components/reducerhook/CounterThree';
import CompA from './components/contextNreducer/compA';
import CompB from './components/contextNreducer/CompB';
import CompC from './components/contextNreducer/CompC';
import DataFectching from './components/useReducercases/DataFetching';
export const CountContext = React.createContext()
const initialState = 0




function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    
    <div className="App">
    <DataFectching/>
    </div>
  );
}

export default App;
