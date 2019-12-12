console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  const imgDiv = document.getElementById("dog-image-container");
  const breedUl = document.getElementById("dog-breeds");
  const dropDownMenu = document.getElementById("breed-dropdown");

  dropDownMenu.addEventListener("change", getBreeds);

  // helper functions
  function iterateInImages(imgL) {
    for (const imgItem of imgL) {
      let img = document.createElement("img");
      img.src = imgItem;
      imgDiv.appendChild(img);
    }
  }
  function iterateInBreed(breed) {
    breedUl.innerHTML = "";
    for (const breedItem in breed) {
      console.log(dropDownMenu.value);
      if (breedItem.startsWith(dropDownMenu.value)) {
        let li = document.createElement("li");
        li.textContent = breedItem;
        li.addEventListener("click", e => {
          e.target.style.color = "red";
        });
        breedUl.appendChild(li);
      }
    }
  }

  function getImages() {
    const Url = "https://dog.ceo/api/breeds/image/random/4";
    fetch(Url)
      .then(data => data.json())
      .then(response=> {
        iterateInImages(response.message);
      });
  }
  getImages();

  function getBreeds() {
    const Url = "https://dog.ceo/api/breeds/list/all";
    fetch(Url)
      .then(data => data.json())
      .then(response=> {
        iterateInBreed(response.message);
      });
  }
  getBreeds();
});
