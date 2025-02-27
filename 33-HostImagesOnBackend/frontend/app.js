const input_image = document.querySelector('#input');
const profile_pic = document.querySelector('#profilePic')


document.addEventListener("DOMContentLoaded",()=>{
  const x = localStorage.getItem("profile_image");
  profile_pic.src = x;
})


async function sendImage(e){
  const file= e.target.files[0];

  if (!file) return;

  console.log(file);

  const data = new FormData();
  data.append("file",file)
  data.append("upload_preset","first_time_using_cloudinary");
  data.append("cloud_name","dl2voyvek");

  const res = await fetch("https://api.cloudinary.com/v1_1/dl2voyvek/image/upload",{
    method : "POST",
    body : data
  })

  const uploadedImageUrl = await res.json();
  console.log(uploadedImageUrl)

  //http://res.cloudinary.com/dl2voyvek/image/upload/v1740662319/gr9kjbuedsgs9tcmotte.png
  
  addImage(uploadedImageUrl.url);
  
}

function addImage(url){
  profile_pic.src = `${url}`
  localStorage.setItem("profile_image",url);
}
input_image.addEventListener("input",(e)=>{
  sendImage(e);
})
