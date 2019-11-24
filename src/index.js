console.log("%c HI", "color: firebrick");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const getImages = async () => {
  const imgDiv = document.querySelector("#dog-image-container");
  const response = await fetch(imgUrl);
  const data = await response.json();
  data.message.map(img => {
    const newImgElement = document.createElement("img");
    newImgElement.setAttribute("src", img);
    newImgElement.style.width = "200px";
    newImgElement.style.margin = "10px";
    imgDiv.appendChild(newImgElement);
  });
};

const getBreeds = async () => {
  const response = await fetch(breedUrl);
  const data = await response.json();
  const dogsDiv = document.getElementById("dog-breeds");
  let counter = 0;
  for (const key in data.message) {
    const newLiElement = document.createElement("li");
    newLiElement.innerHTML = key;
    newLiElement.setAttribute("id", "dog-" + counter);
    dogsDiv.appendChild(newLiElement);
    counter++;
  }
};
const changeColor = () => {
  document.getElementById("dog-breeds").addEventListener("click", e => {
    e.target.tagName === "LI" ? (e.target.style.color = "firebrick") : null;
  });
};
const filterList = char => {
  const dogsDiv = document.getElementById("dog-breeds");
  Array.from(dogsDiv.children)
    .filter(dog => dog.textContent.toLocaleLowerCase().charAt(0) !== char)
    .forEach(dog => dog.classList.add("hide"));
  Array.from(dogsDiv.children)
    .filter(dog => dog.textContent.toLocaleLowerCase().charAt(0) === char)
    .forEach(dog => dog.classList.remove("hide"));
};

document.addEventListener("DOMContentLoaded", () => {
  getImages();
  getBreeds();
  changeColor();
  document.getElementById("breed-dropdown").addEventListener("click", e => {
    filterList(e.target.value);
  });
});

"moh".charAt(0);
