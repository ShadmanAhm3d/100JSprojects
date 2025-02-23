const form_nextPage = document.querySelector("#form-nextPage");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const user = localStorage.getItem("userData");
const nameUser = JSON.parse(user);

document.addEventListener("DOMContentLoaded", () => {
  console.log("X: ", nameUser);
  inputName.value = nameUser.name;
  inputEmail.value = nameUser.email;
});

const updatedUser = {
  oldName: nameUser.name,
  name: nameUser.name,
  email: nameUser.email,
};

form_nextPage.addEventListener("input", (e) => {
  if (e.target.id === "name") {
    updatedUser.name = e.target.value;
    console.log(e.target.value);
  } else {
    updatedUser.email = e.target.value;
    console.log(e.target.value);
  }
});

form_nextPage.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevents page reload

  await fetch("http://localhost:5000/api/updateUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  console.log("User Update Submitted");
});
