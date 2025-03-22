import React from "react";
import listOfBlogs from "../utils/constants.js";

const Sidebar = ({ onClickBlogSelector,blogList }) => {
  return (
    <div className="fixed top-0 left-0 w-1/4 h-screen bg-neutral-900 border-r border-white p-4">
      <div className="items px-4 h-1/2 w-full bg-neutral-800 rounded-lg ">
        <ul className="flex flex-col gap-4 h-ful mt-12 w-full text-center ">
          {blogList.map((blog) => {
            return (
              <li
                key={blog.id}
                className="bg-sky-500 rounded-lg h-12 text-center leading-[3rem] "
              >
                <p onClick={()=>{onClickBlogSelector(blog.id)}} className="m-auto">
                  {blog.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
