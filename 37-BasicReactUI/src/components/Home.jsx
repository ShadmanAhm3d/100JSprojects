import React from "react";
import Sidebar from "./Sidebar";
import TopBarMain from "./TopBarMain";
import Cards from "./Cards";
import Categories from "./Categories";

//NOTE : This Page Will be Shown when the User has been Authenticated
const Home = () => {
  return (
    <div className="Main-Home h-screen w-screen flex">
      <Sidebar />
      <div className="h-screen  overflow-y-auto w-full md:w-4/5">
        {/* TOP BAR*/}
        <TopBarMain />

        {/* Please Write a Categories Component , where it will show quickly accessible categories like Plumbing,Electrician,etc (make sure atleast 4), I want users to have aceess to quickly select what they are looking for & then i will show only that category based result (but you dont need to do that just create me a categories comonent) */}

         <Categories />
        {/* Main Container*/}
        <div className="main-content w-full flex flex-wrap mt-4 gap-24  space-y-4 items-center justify-center">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
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
};

export default Home;
