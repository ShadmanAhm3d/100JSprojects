import "./App.css";
import Cards from "./assets/comps/Cards";
import Sidebar from "./assets/comps/Sidebar";

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex">
      <Sidebar />

      <div className="w-4/5 h-screen overflow-y-auto">
        <div className="searchbar sticky top-0 text-dark bg-lime-300 w-full h-32">
        </div>
        <div className="main-content w-full flex flex-col space-y-4 items-center justify-center">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
