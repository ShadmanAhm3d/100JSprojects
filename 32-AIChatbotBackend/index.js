/* const newPromise = new Promise((resolve,reject)=>{
  fetch("AIzaSyBKalaMM9GTK_brV2WEaWO2tuO3Qt-vA88"):
}) */
/* curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
  "contents": [{
    "parts":[{"text": "Explain how AI works"}]
    }]
   }' */

import { markdownToTxt } from "markdown-to-txt";

const btn = document.querySelector("#btn");
const content = document.querySelector("#content");

const getData = async () => {
  const apiKey = "AIzaSyBKalaMM9GTK_brV2WEaWO2tuO3Qt-vA88";
  try {
    const result = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: "Explain how AI works" }],
            },
          ],
        }),
      },
    );

    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }

    const data = await result.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    return text; // Return the text
  } catch (error) {
    console.error("Error fetching data:", error);
    return ""; // Return empty string on error
  }
};

const updateDOM = (text) => {
  try {
    const res = markdownToTxt(text);
    content.textContent = res;
  } catch (error) {
    console.error("Error converting markdown:", error);
    content.textContent = "Error processing response.";
  }
};

btn.addEventListener("click", async () => {
  const resultText = await getData();
  updateDOM(resultText);
});
