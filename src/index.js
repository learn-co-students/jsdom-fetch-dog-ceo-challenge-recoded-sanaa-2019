console.log('%c HI', 'color: firebrick');
let img= document.querySelector("#dog-image-container");
fetch("https://dog.ceo/api/breeds/image/random/4").then(resp=>resp.json()).then(function(json){
    for(ele of json.message){
        img.innerHTML+=`<img src="${ele}">`;
    }
});

let ul=document.getElementById("dog-breeds");
fetch("https://dog.ceo/api/breeds/list/all").then(resp=>resp.json()).then(function(json){
    for(ele in json.message){
        let li=document.createElement("li");
        li.innerText=ele;
        ul.appendChild(li);
        li.addEventListener('click',function(){
            li.style.color="red";
        });
    };
});
let list
setTimeout(function(){
    list = document.querySelectorAll("li");
},3000)
let select =document.getElementById("breed-dropdown");
select.addEventListener("change",function(){
    
    if(this.value=="b"){
        ul.innerHTML="";
        for(ele of list){
            if(ele.innerText.charAt(0)=="b"){
            ul.innerHTML+=`<li>${ele.innerText}`;}
        }
        
    }
    if(this.value=="a"){
        ul.innerHTML="";
        for(ele of list){
            if(ele.innerText.charAt(0)=="a"){
            ul.innerHTML+=`<li>${ele.innerText}`;}
        }
        
    }
    if(this.value=="d"){
        ul.innerHTML="";
        for(ele of list){
            if(ele.innerText.charAt(0)=="d"){
            ul.innerHTML+=`<li>${ele.innerText}`;}
        }
        
    }
    if(this.value=="c"){
        ul.innerHTML="";
        for(ele of list){
            if(ele.innerText.charAt(0)=="c"){
            ul.innerHTML+=`<li>${ele.innerText}`;}
        }
        
    }
    
});