import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subject: [],
  });

  const onChangeHandler = (e) => {
    const { id, name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setData((prevData) => ({
        ...prevData,
        subject: checked
          ? [...prevData.subject, value] // Add to array if checked
          : prevData.subject.filter((subject) => subject !== value), // Remove if unchecked
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [id]: value, // Update other inputs by id
      }));
    }
  };

  const formSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log(data); // Logs the form state
  };

  return (
    <div className="h-full w-full text-white border border-sky-200 flex justify-center">
      <form
        onSubmit={formSubmit}
        className="w-1/2 flex flex-col border border-blue-200 p-6"
      >
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="firstName" className="text-2xl">
            FirstName
          </label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="FirstName"
            id="firstName"
            value={data.firstName}
            className="h-12 p-2 m-2 w-full border border-red-200"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="lastName" className="text-2xl">
            Lastname
          </label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Lastname"
            id="lastName"
            value={data.lastName}
            className="h-12 p-2 m-2 w-full border border-red-200"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
            type="email"
            onChange={onChangeHandler}
            placeholder="Email"
            id="email"
            value={data.email}
            className="h-12 p-2 m-2 w-full border border-red-200"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="contact" className="text-2xl">
            Contact
          </label>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Contact"
            id="contact"
            value={data.contact}
            className="h-12 p-2 m-2 w-full border border-red-200"
          />
        </div>

        <div className="flex flex-row items-center w-full gap-12">
          <label htmlFor="gender" className="text-2xl">
            Gender
          </label>
          <div>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              onChange={onChangeHandler}
              checked={data.gender === "male"}
            />
          </div>
          <div>
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="female"
              onChange={onChangeHandler}
              checked={data.gender === "female"}
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full gap-12">
          <div>
            <label htmlFor="maths">Maths</label>
            <input
              type="checkbox"
              value="maths"
              name="subject"
              checked={data.subject.includes("maths")}
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label htmlFor="english">English</label>
            <input
              type="checkbox"
              value="english"
              name="subject"
              checked={data.subject.includes("english")}
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label htmlFor="phy">Physics</label>
            <input
              type="checkbox"
              value="phy"
              name="subject"
              checked={data.subject.includes("phy")}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
