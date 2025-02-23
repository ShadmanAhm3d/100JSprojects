
const form = document.querySelector("#form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");


const Object_details = {
  name: "",
  email: "",
};

form.addEventListener("input", (e) => {
  if (e.target.id === "name") {
    Object_details.name = e.target.value;
  } else if (e.target.id === "email") {
    Object_details.email = e.target.value;
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevents page reload
  console.log(Object_details)
  localStorage.setItem("userData", JSON.stringify(Object_details)); // Save Data

  await fetch("http://localhost:5000/api/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object_details),
  });
  console.log("Form Submitted");
});
