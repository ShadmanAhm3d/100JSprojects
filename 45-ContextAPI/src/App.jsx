import "./App.css";
import { useState } from "react";

function App() {
  const [count,setCount] = useState("PEW");
  console.log(setCount)
  return <div>
    {count}
  </div>;
}

export default App;
