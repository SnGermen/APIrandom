const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://random.cat/view/985";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  fetchHandler();
});

  
