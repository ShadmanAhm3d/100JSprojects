import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal((prev) => !prev);
  };

  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <div className="h-screen w-screen main-upperContainer  bg-gray-950">
      <div className="inside-Container bg-black text-white flex items-center flex-wrap gap-12  justify-center">
        {Array.from({ length: 30 }).map((_, i) => (
          <Card key={i} modalHandler={modalHandler} />
        ))}{" "}
      </div>
{/* Modal ko yahan render karenge taaki sabko control mile */}
      {modal && <Modal onClose={modalHandler} />}
    </div>
  );
}

const Card = ({ modalHandler }) => {
  return (
    <div className="cardContainer h-[260px] w-[400px] bg-neutral-800 flex items-center justify-center">
      <button
        onClick={modalHandler}
        className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Click Mee
      </button>
    </div>
  );
};


const Modal = ({ onClose }) => {
  return (
    <div className="backdrop-blur-lg  fixed top-0 left-0 h-full w-full bg-transparent bg-opacity-1 flex items-center justify-center z-50">
      <div className="bg-white text-black shadow-lg shadow-cyan-500/50 p-6 rounded-lg backdrop-blur-lg">
        <h2 className="text-xl font-bold">This is the Modal</h2>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default App;
