console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
function fetchImages() {
    fetch(imgUrl).then(function (response) {
        return response.json();

    }).then(function (json) {
        const imgDiv = document.getElementById('dog-image-container');
        for (const key of json) {
            const newImgElement = document.createElement("img");
            newImgElement.setAttribute("src", key);
            document.body.appendChild(newImgElement);
            imgDiv.appendChild(newImgElement);
        }
    })
}
function fetchDogs {
    fetch(breedUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
        const dogsDiv = document.getElementById('dog-breeds');
        let counter = 0 ; 
        for (const element of json) {
            const newLiElement = document.createElement('li');
            newLiElement.innerHTML= element;
            newLiElement.setAttribute("id" ,"dog-" + counter );
            dogsDiv.appendChild(newLiElement);
        }
    })
}
function changeTextOnClick() {
    const liElements = document.querySelectorAll("#dog-breeds li");
    liElements.addEventListener('click', function () {
        let liElementId = liElements.id 
    })
}
document.addEventListener("DOMContentLoaded", function () {
    fetchImages();
    fetchDogs();
    
});
