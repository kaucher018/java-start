let btn = document.getElementById("btn")
let fox = document.getElementsByClassName("box1")
console.log(fox)
//list of all events:https://developer.mozilla.org/en-US/docs/Web/Events

btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="click"
   fox[0].style.backgroundColor="red"
    
   
    });
    btn.addEventListener("dblclick",()=>{
        document.querySelector(".box").innerHTML="click"
       fox[0].style.backgroundColor="green"
        
       
        });

    

