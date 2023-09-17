const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const card = document.querySelector(".card");
const loadder = document.querySelector(".loadder");
const url = 'https://api.thecatapi.com/v1/images/search?size=full'

async function fetchHandler() {
  try {
    button.disabled = true
    loadder.className = 'loadder'
    card.className = 'card card_hidden'
    const response = await fetch(url);
    const data = await response.json();
    image.src = data[0].url
    image.alt = data[0].id
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      button.disabled = false
      card.className = 'card'
      loadder.className = 'loadder_hidden'
    }, 2800);
  }
}

button.addEventListener("click", () => {
  fetchHandler();
});

  
