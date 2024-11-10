let a = prompt("first number:")
let b = prompt("next number:")

let sum = parseInt(a) + parseInt(b)
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("there is no numbers")
}

function main()
{
    let x=5
try{
console.log("the sum is :",sum*x)
return true
}
catch(error){
    console.log("Error asche")
    return false

}
finally{
    console.log("finally")
}
}
let c = main()