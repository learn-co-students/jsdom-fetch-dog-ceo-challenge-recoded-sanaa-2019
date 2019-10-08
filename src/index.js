console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  const imgDiv = document.getElementById("dog-image-container");
  const breedUl = document.getElementById("dog-breeds");
  const dropDownMenu = document.getElementById("breed-dropdown");

  dropDownMenu.addEventListener("change", getBreeds);

  // helper functions
  function iterateInImages(imgList) {
    for (const imgItem of imgList) {
      let img = document.createElement("img");
      img.src = imgItem;
      imgDiv.appendChild(img);
    }
  }
  function iterateInBreed(breedList) {
    breedUl.innerHTML = "";
    for (const breedItem in breedList) {
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

  // fetching functions
  function getImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(data => data.json())
      .then(res => {
        iterateInImages(res.message);
      });
  }
  getImages();

  function getBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then(data => data.json())
      .then(res => {
        iterateInBreed(res.message);
      });
  }
  getBreeds();
});
