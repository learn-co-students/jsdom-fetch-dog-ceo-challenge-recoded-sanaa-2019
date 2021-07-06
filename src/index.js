console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => {return res.json()})
    .then(obj=> {
        let imgContainer= document.getElementById('dog-image-container')
        for (const item in obj.message){
        let img= document.createElement('img')
        img.src = obj.item
        imgContainer.appendChild(img)
        }
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => {return res.json()})
    .then(obj=> {
        let dogBreeds= document.getElementById('dog-breeds');
        for (const item in obj.message){
            let newli= document.createElement('li');
            newli.textContent=item;
            newli.addEventListener("click", e => {
                e.target.style.color = "#0088dd";
              })
            dogBreeds.appendChild(newli)            
        }
})


//still have to do the filtering Task (another time)

})