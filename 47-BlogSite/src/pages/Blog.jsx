// Blog.jsx
import React from "react";

const Blog = ({ blogid, blogList }) => {
  const blogFilter = () => {};

  return (
    <div className="ml-[25%] flex-1 p-4 overflow-y-auto text-white">
      <div className="w-full">
        {/* Heading */}
        <div className="heading">
          {blogList
            .filter((blog) => blog.id === blogid) // First, filter the matching blog
            .map(
              (
                blog, // Then, map over the filtered result
              ) => (
                <h1 key={blog.id}>{blog.name}</h1>
              ),
            )}
        </div>

        {/* Main Content */}
        <div className="main">{/* Rest of your lorem ipsum text */}
          {blogList.filter((blog)=>blog.id===blogid).map((blog)=>{
            return <p key={blog.id}>{blog.content}</p>
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
