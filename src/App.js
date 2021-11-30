import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import { useState } from "react";

import "./App.css";
function App() {
  const [name, setName] = useState(0);
  const randomize = (name) => {
    setName(name);
  };
  return (
    <div className="App">
        <Nav randomize={randomize} />
        <Main name={name} />
    </div>
  );
}

export default App;
