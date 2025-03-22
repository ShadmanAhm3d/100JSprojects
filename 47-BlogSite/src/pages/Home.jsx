// Home.jsx
import { useEffect, useState } from "react";
import React from "react";
import Sidebar from "../components/Sidebar";
import Blog from "../pages/Blog";
import listOfBlogs from "../utils/constants";
import AddBlog from "../components/AddBlog"
import ModalComp from "../components/ModalComp"

const Home = () => {
  const [selected, setSelected] = useState(1);
  const [model,setModel] = useState(false)

  useEffect(() => {
    console.log(selected);
    console.log(model);
  }, [selected,model]);

  const onClickBlogSelector = (id) => {
    setSelected(id);
  };

  const setModalON = () =>{
    setModel((reverse)=>!reverse);
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        onClickBlogSelector={onClickBlogSelector}
        blogList={listOfBlogs}
      />
      <div className="flex flex-col w-screen">
        <AddBlog model={model} setModalON={setModalON}/>
        <Blog blogid={selected} blogList={listOfBlogs} />
      </div>

      {model && <ModalComp />}



    </div>
  );
};

export default Home;
