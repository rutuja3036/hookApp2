
import './App.css';
import React from 'react';
import ClickCounter from './components/higherordercomponents/ClickCounter';
import HoverCounter from './components/higherordercomponents/HoverCounter';
import DocTitle from './customhooks/DocTitle';
import DocTitle2 from './customhooks/DocTitle2';




function App() {
  
  return (
    
    <div className="App">
<DocTitle/>
<DocTitle2/>
    </div>
  );
}

export default App;
