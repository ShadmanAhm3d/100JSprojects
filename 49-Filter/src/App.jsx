import { useState } from "react";
import Search from "./Search";
import Card from "./Card";
import people from "./constant";

function App() {

  const [ip,setIp] = useState("");

  const search_handler = (e)=>{
    setIp(e.target.value);
  }
  const submit_handler = (e) =>{
    e.preventDefault();
    console.log(ip);
    console.log("button")
    //setIp("");
  }


  return (
    <div className="text-white h-screen w-screen bg-neutral-900">
      <Search ip={ip} hn={search_handler} submit_handler={submit_handler}/>

      <Card data={people} searched_item={ip}/>
    </div>
  );
}

export default App;
