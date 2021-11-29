import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import { ThemeContextProvider } from './context/ThemeContext';

import './App.css';
import { useState } from 'react';
function App() {
  const [number, setNumber] = useState(0)
  const randomize = () => {
    setNumber(num=>num+1)
  }
  return (
    <div className="App">
      <ThemeContextProvider>
        <Nav randomize={randomize} />
        <Main number={number}/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
