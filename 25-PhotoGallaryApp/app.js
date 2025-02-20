const submitButton = document.querySelector("#getPhotos");
const innerCard = document.querySelector(".innerCard");
const ip = document.querySelector("#ip");

const ipValue = +ip.value;
async function getImages() {
  let response = [];
  const myPromise = new Promise((resolve, reject) => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=o80K_GvBT8qmZrYtDi1idLu4YsLNexyLrMkP8rKbr9E&count=${ipValue}`,
    )
      .then((data) => data.json())
      .then((emojies) => resolve(emojies))
      .catch((error) => reject("Erorrjl,", error));
  });

  try {
    response = await myPromise;
    return response;
  } catch (error) {
    console.log("error", error);
  }
}


async function hideAndBring() {
  document.getElementById("check").classList.add("hide");

  // console.log(typeof ipValue);

  if (ipValue <= 0 || ipValue >= 11) {
    // console.log("here");
    document.getElementById("check").classList.remove("hide");
    return;
  }

  submitButton.classList.add("hide");
  // console.log(submitButton);
  innerCard.classList.toggle("hide");

  //now get the images

  const response = await getImages();
  console.log(response);
  
  response.forEach((curr)=>{
    const newDiv= document.createElement("div");
    const newImage = document.createElement("img");

    newImage.src = curr.urls.small;
    newDiv.className = "imageCard";
    
    newDiv.appendChild(newImage);
    innerCard.appendChild(newDiv);
  })


}

submitButton.addEventListener("click", () => {
  hideAndBring();
});
