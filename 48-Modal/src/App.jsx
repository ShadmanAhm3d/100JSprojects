import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const modalHn = () => {
    setIsOpen((kchbhijohaiandar) => !kchbhijohaiandar);
  };

  return (
    <>
      <div className="text-white  bg-[#212121] h-screen w-screen">
        <div className="text-center ">
          <button
            onClick={modalHn}
            className="px-4 mt-12 py-2 bg-indigo-500 rounded-lg text-white"
          >
            OPEN MODAL
          </button>
        </div>

        {isOpen && <Modal funbhejo={modalHn} />}
      </div>
    </>
  );
}

function Modal(prop) {
  const modalRef = useRef();

  const modalClickOutSide = (e) => {
    if (modalRef.current === e.target) {
      prop.funbhejo();
    }
  };

  return (
    <div
      onClick={modalClickOutSide}
      ref={modalRef}
      className="fixed inset-0 border border-white  flex items-center justify-center backdrop-blur-sm"
    >
      <div className="modal border border-red-700 h-[300px] w-[500px]">
        Moda l
        <div>
          <button
            onClick={prop.funbhejo}
            className="px-4 mt-12 py-2 bg-indigo-500 rounded-lg text-white"
          >
            Close MODAL
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
