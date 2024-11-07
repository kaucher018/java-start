async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 8000);
    })

}
async function getData(){
    //get data from server: jsonplaceholder
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      //.then(response => response.json())
      //.then(json => console.log(json))
      let data = await x.json()
      console.log(data)
      return 455

    }

    async function main() {
    
console.log("Loading modules")

console.log("Do somthing else")

console.log("Load data")

let data= await getData() //wait for proccess //otherwise rub in background
   console.log(data)
    console.log("Process data")
    console.log("task 2")
}
main()



//call back aproch
//console.log("Load data")
//let data= getData()
//data.then((v) => {
   // console.log(data)
   // console.log("Process data")

//console.log("task 2")
//})

//postdata from mdn




