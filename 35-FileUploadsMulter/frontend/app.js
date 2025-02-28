async function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  if (!fileInput.files.length) {
    alert("Please select a file!");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  console.log(formData)

  try {
    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.url) {
      document.getElementById("uploadedImage").src = data.url;
      alert("Upload Successful!");
    } else {
      alert("Upload Failed: " + data.error);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
}
