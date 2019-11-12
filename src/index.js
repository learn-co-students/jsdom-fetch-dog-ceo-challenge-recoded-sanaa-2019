console.log('%c HI', 'color: firebrick')
        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            for (const key in data){
                let currentArray=data[key]
                let newArray=[]
                if(Array.isArray(currentArray)){
                    for(let i=0; i<currentArray.length; i++){
                        newArray.push(currentArray[i])
                    }
                }
                for(const element in newArray){
                    let dogDiv=document.getElementById('dog-image-container')
                    let image=document.createElement('img')
                    image.setAttribute('src',newArray[element]);
                    dogDiv.appendChild(image)
                }
            }
        })
       fetch("https://dog.ceo/api/breeds/list/all")
       .then(response =>{
           return response.json()
       })
       .then(data=>{
           for(const key in data){
            let valueOfKey = data[key]
            for(const element in valueOfKey){
                if(Array.isArray(valueOfKey[element])){

                    let dogBreed=document.getElementById('dog-breeds')
                    let li=document.createElement('li')
                    li.innerHTML=element;
                    dogBreed.appendChild(li)
                }
            }

            if(document.querySelector('#dog-breeds li')){
                let checkList=document.querySelector("#dog-breeds");
                checkList.addEventListener('click',function(e){
                    if(e.target && e.target.matches('li')){
                        e.target.style.color="red"
                    }
                })
            }
            if(document.querySelector("#dog-breeds li")){
                let list =document.querySelector('#dog-breeds')
                let li = document.getElementsByTagName("li")
                Array.from(li).forEach(function(li){
                    let listName= li.firstChild.textContent;

                    let breedDropDown =document.getElementById("breed-dropdown")
                    breedDropDown.addEventListener('click',function(e){
                        let letter =breedDropDown.value;

                        if(listName.charAt(0)==letter){
                            li.style.display="block"
                        }
                        else{
                            li.style.display="none"
                        }
                    })
                })
            }
           }
       })