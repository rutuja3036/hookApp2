import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClickCounter from './components/higherordercomponents/ClickCounter';
import HoverCounter from './components/higherordercomponents/HoverCounter';




function App() {
  
  return (
    
    <div className="App">
<HoverCounter/>
    <ClickCounter/>
    </div>
  );
}

export default App;
