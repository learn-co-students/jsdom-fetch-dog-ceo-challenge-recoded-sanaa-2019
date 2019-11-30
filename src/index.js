console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {

//challeng-1

   

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response=>response.json())
.then(item=>{
    for(const source of item.message){
        let imgDiv=document.getElementById("dog-image-container");
        let img=document.createElement("img");
         img.setAttribute("src",source);
         imgDiv.appendChild(img);
    }});

//challeng-2

const drop=document.getElementById("breed-dropdown");
drop.addEventListener("change",function(e){
    let start=e.target.value;
    let myarr=[];
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response=>response.json())
    .then(function(json){
    for(const element  in json.message){
        myarr.push(element);
    }
        let ul=document.getElementById('dog-breeds');
        ul.innerHTML='';
        let newarray=myarr.filter(item=>item.startsWith(start))
        newarray.map(item=>{
        let li =document.createElement("li");
        li.innerText=item;
        li.addEventListener("click",function(el){
        el.target.style.color="red";
        })
        ul.appendChild(li); 
        })      
       
     } )
    
})





    }   
)
