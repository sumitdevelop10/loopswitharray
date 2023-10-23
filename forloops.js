let num = [3,54,1,45,7]

//for(let i=0;i<num.length;i++){

//console.log(num[i])
//}


num.forEach(element)=>{
console.log(element*element)
}

//array.from

let name = "messi"
let arr = Array.from(name)
console.log(arr)

//for of

for (let i of num){
    console.log(i)
}

//for in

for (let i in num){
    console.log(num[i])
}