console.log('%c HI', 'color: firebrick')


/// Challenge 1 /// fetch the dog images and put them in div with id "dog-image-container"
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => {
        return response.json()
    })
    .then(data => {

        // console.log(data)

        for (const key in data) {
            // console.log(data[key]);
            //if Array.isarray >>> only pass arrays!!!

            let current = data[key]
            let next = []
            // console.log("New here" + current);

            if (Array.isArray(current)) {
                for (let i = 0; i < current.length; i++) {
                    next.push(current[i])
                }

            }

            // console.log(next)

            for (const element in next) {
                // console.log(next[element]);
                let dog = document.getElementById("dog-image-container");
                let image = document.createElement("img");
                image.setAttribute("src", next[element]);
                dog.appendChild(image)
            }
        }

    })

/// Challenge 2 /// fetch the dog breeds and put it in ul
fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => {
        return response.json()
    })
    .then(data => {

        // console.log("okay" + data)

        for (const key in data) {
            // console.log(key); // gets key 
            console.log(data[key]); //gets value 
            // console.log(data);

            let current = data[key]




            //FROM HERE WORKSSSSSSSSS.....

            for (const element in current) {
                // console.log(next[element]);

                if (Array.isArray(current[element])) {
                    console.log("you are close");

                    let dogBreed = document.getElementById("dog-breeds");
                    let list = document.createElement("li");
                    let newArray = Object.keys(current);
                    list.innerHTML = element;
                    dogBreed.appendChild(list);
                    
                }
              

            }
            /// Challenge 3 /// change color when clicked on text
            if (document.querySelector("#dog-breeds li")) { 

                let clickList = document.querySelector("#dog-breeds")
                clickList.addEventListener("click", function (e) {
                   console.log("Ouch!");
                   
                    if (e.target && e.target.matches("li")){
                        // clickList.style.color = "red";
                        e.target.className = "newClassTest";
                        e.target.style.color  = "red";
                   }
                   
                   
                })
            }

            /// Challenge 4 /// filter the breeds that start with a particular letter using the dropdown
           
            if (document.querySelector("#dog-breeds li")) { 

                
                let List = document.querySelector("#dog-breeds")
                let li = document.getElementsByTagName("li");
                Array.from(li).forEach(function(li){
                    let listName =  li.firstChild.textContent;


                //get letter and compare with first letter of list
                let breedDropdown = document.getElementById("breed-dropdown");
                breedDropdown.addEventListener('click', function(e){

                    let letter = breedDropdown.value;
                    // console.log(letter);

                    if(listName.charAt(0)== letter){
                         console.log(listName);
                         li.style.display="block"}else{li.style.display="none"}
                  
                   
                })
            
                            
                            
                            }
                        
                )}
                
                  
    
                }

    })



           
