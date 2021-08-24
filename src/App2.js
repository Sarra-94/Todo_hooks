import { useState } from "react";
import "./App.css";
import CounterFunction from "./Components/CounterFunction";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <CounterFunction />}
    </div>
  );
}

export default App;
