console.log("bluebox")

//[selecting by class]

//let boxes = document.getElementsByClassName("box")
//console.log(boxes)
//console.log(boxes[3])
//boxes[2].style.backgroundColor="red"

//[[selecting byID]

//document.getElementById("bluebox").style.backgroundColor="blue"

//[[selecting by query]

console.log(document.querySelector(".box"))//for select first child


//for select ALL child and parents
document.querySelectorAll(".box").forEach(element => {
    //making foreach loop for access .style;
   console.log(element)
   element.style.backgroundColor="blue"

});
//[[selecting by tag name]
console.log(document.getElementsByTagName("div"))


