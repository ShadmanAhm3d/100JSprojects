import React from "react";

const AddBlog = ({model , setModalON}) => {





  return (
    <div className="ml-[25%]  p-4 text-white">
      <div className="w-full border border-white flex justify-center">
        <button 
          onClick={setModalON}
          className="btn-primary btn text-white">Add a Blog</button>
      </div>
    </div>
  );
};

export default AddBlog;
