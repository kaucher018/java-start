//Create elements by js
let div= document.createElement("div");
div.innerHTML="Im the boss";
div.setAttribute("class","created");
document.querySelector(".container").append(div);//.before; .after;  .prepend;

//insert html
let cont= document.querySelector(".container")
cont.insertAdjacentHTML("afterend","Im the adjenceHTML")


//removal
//document.querySelector(".container").remove()

//class list 
console.log(document.querySelector(".container").classList)
//class name
console.log(document.querySelector(".container").className)
//adding another clss in classlist
console.log(document.querySelector(".container").classList.add("dock"))
//remove
//console.log(document.querySelector(".container").classList.remove("container"))
//toggle(if exist thn remove/doesnt exit then add)
console.log(document.querySelector(".container").classList.toggle("dock"))
console.log(document.querySelector(".container").classList.toggle("dock"))
