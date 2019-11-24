console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => {
    return response.json()
})
.then(json=> {
    //console.log(json)
    let container= document.getElementById('dog-image-container');
    for (let i=0; i<json.message.length; i++){
    let images= document.createElement('img');
    images.setAttribute("src", json.message[i]);
    container.appendChild(images);
    }

})


fetch('https://dog.ceo/api/breeds/list/all')
.then(response => {
    return response.json()
})
.then(json=> {
    let list= document.getElementById('dog-breeds');
    for (const key in json.message){
        let item= document.createElement('li');
        item.innerText=key;
        item.setAttribute('onclick', 'color(this)')
        list.appendChild(item)
        
    }
    
    
})

function select(e) {
    let list= document.getElementById('dog-breeds');
    list.innerHTML='';
    let name = e.value; 
    //console.log(name)        
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        return response.json()
    })
    .then(json=> {
        let myArr=[];
        for (const key in json.message){
            myArr.push(key);
        }
        //console.log(myArr)
        if(name=='all'){
            for (let j=0; j<myArr.length; j++){
            let item= document.createElement('li');
            item.innerText=myArr[j];
            item.setAttribute('onclick', 'color(this)')
            list.appendChild(item)
            }
        }
        else{
            let newArry = myArr.filter(index=>
            index.startsWith(name))
            //console.log(newArry);
            for (let i=0; i<newArry.length; i++){
                let item= document.createElement('li');
                item.innerText=newArry[i];
                item.setAttribute('onclick', 'color(this)')
                list.appendChild(item)
            }
                
        }
        
            
    })
}

function color(e){
    e.style.color= 'red';
}
        
        