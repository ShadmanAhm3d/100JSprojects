import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const [textareaData, setTextareaData] = useState('');

  useEffect(() => {
    // Receive data from server
    socket.on("data", (msg) => {
      setTextareaData(msg);
    });

  }, [textareaData]);

  const handleTextArea = (e) => {
    const value = e.target.value;
    setTextareaData(value);
    socket.emit("data", value);
  };

  return (
    <div className="someContent">
      <textarea
        id="text-area"
        value={textareaData}
        onChange={handleTextArea} // use onChange for better real-time UX
      />
    </div>
  );
}

export default App;

