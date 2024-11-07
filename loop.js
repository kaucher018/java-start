let a = [1, 2, 3, 4, 5, 8]
//let newar=[]
//for (let index = 0; index < a.length; index++) {
//    const element = a[index];
//    newar.push(element**2)
//}
//maping
let newar = a.map((e) => {
    return e ** 2
})
console.log(newar)

//filter
const gts = (e) => {
    if (e > 7) {
        return true
    }
    return false
}

console.log(a.filter(gts))

//reduce
let ar2 =[1,2,3,4,5]
const red=(a,b)=>{
    return a*b
}
console.log(ar2.reduce(red))


//for each loop
a.forEach((value, index, arr) => {
    console.log(value, index, arr)
})
//for in loop
let object = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element)

    }

}
//for of loop
for (const iterator of a) {
    console.log(iterator)
}






