import Sidebar from "./Sidebar";

const Home = () => {
  const onChanged = (e) => {
    console.log(e.target);
  };

  return (
    <div className="Home">
      <h2 className="border-sky-500 border">This is main home page</h2>
      
      {/* ✅ Corrected onClick event */}
      <button id="btn" onClick={onChanged}>Click Me</button>

      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export default Home;

