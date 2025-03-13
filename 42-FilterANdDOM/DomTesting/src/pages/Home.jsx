import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [currTheme, setCurrTheme] = useState("light");
  const [dropShow, setDropShow] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const changeThemehandler = (e) => {
    setCurrTheme(e.target.id);
    localStorage.setItem("theme", e.target.id);
    setDropShow(false); // Close dropdown after selecting
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setCurrTheme(savedTheme);
    setFilteredData(data);
  }, []);

  //Search Content => {start}

  const data = [
    { name: "John Doe", likes: "1200", price: 45000 },
    { name: "Jane Smith", likes: "980", price: 38000 },
    { name: "Mike Johnson", likes: "1500", price: 52000 },
    { name: "Emily Davis", likes: "1100", price: 41000 },
    { name: "Chris Brown", likes: "870", price: 36000 },
    { name: "Sarah Wilson", likes: "1340", price: 49000 },
    { name: "David Lee", likes: "1230", price: 47000 },
    { name: "Emma Taylor", likes: "1450", price: 53000 },
    { name: "Olivia Martinez", likes: "920", price: 40000 },
    { name: "James Anderson", likes: "1600", price: 55000 },
    { name: "Sophia Thomas", likes: "1020", price: 42000 },
    { name: "William Garcia", likes: "1170", price: 46000 },
    { name: "Mia Rodriguez", likes: "890", price: 37000 },
    { name: "Daniel Harris", likes: "1250", price: 48000 },
    { name: "Ava Clark", likes: "970", price: 39000 },
    { name: "Liam Lewis", likes: "1380", price: 50000 },
    { name: "Benjamin Walker", likes: "1270", price: 47500 },
    { name: "Ella Hall", likes: "1150", price: 45500 },
    { name: "Alexander Allen", likes: "1080", price: 43000 },
    { name: "Charlotte Young", likes: "940", price: 38500 },
  ];

  const searchHandler = (e) => {
    console.log(typeof e.target.value);
    filterResults(e.target.value);
  };
  const filterResults = (text) => {
    const new_filteredItem = data.filter((newItem) => {
      return newItem.name.includes(text);
    });
    setFilteredData(new_filteredItem);
  };

  const filterHandler = (e) => {
    const newItems = data.filter((elem) => elem.price > 40000);
    console.log(newItems);
    setData(newItems); // ✅ Just set the filtered array directly
  };

  //Seach Content => {end}

  return ( <div className="main h-screen w-screen" data-theme={currTheme}>
      <Navbar
        changeThemehandler={changeThemehandler}
        dropShow={dropShow}
        setDropShow={setDropShow}
      />
      <main className="h-5/6 overflow-y-auto ">
        <div>
          <div className="search-bar flex justify-center m-12">
            <label className="input input-xl rounded-lg w-1/2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                className=""
                onChange={searchHandler}
              />
            </label>{" "}
            <button className="btn btn-dash" onClick={filterHandler}>
              Filter
            </button>
          </div>

          {/* ✅ Cards */}
          <div className="flex flex-row flex-wrap gap-8 justify-center">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  className="border-white border card card-dash bg-base-100 w-96"
                  key={index}
                >
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Price: {item.price}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">{item.likes}</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500">No results found</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
