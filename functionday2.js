

// function add(x,y){
//     return [x+y,x-y,x*y,x/y,x%y]
// }
// let h = add(12,13)
// console.log(h[0])
// console.log(h[1])
// console.log(h[2])
// console.log(h[3])
// console.log(h[4])

// //------------three ways to write a function


// console.log("------------")

// // function declartion

// function Addition(x,y){
//     return x+y
// }

// let rr = Addition(33,22)
// console.log(rr)

// console.log("------------")

// // function expression

let Add2= function(x,y){
    return x+y
}

let ry = Add2(33,22)
console.log(ry)

console.log("------------")


let subtraction = function(x,y){
    console.log(x-y)
}

console.log(subtraction)//[Function: subtraction]
subtraction(30,15)    //15   //calling the function 

console.log("------------")


let addB = function(x,y){
    return x*y
}
console.log(addB)//[Function: addB]

console.log("-------------")


let rz= addB(12,13)

console.log(rz)   

console.log("----------")

function addC(fn){
    let f = fn(12,13)
return f
}

let rrr = addC(addB)
console.log(rrr)

console.log("-----------")

// Arrow function

let subtraction1= (x,y)=>{
    console.log(x-y)
}

subtraction1(12,6)


console.log("-----------")


let sub = (x,y)=> x-y

console.log(sub)  //[Function: sub]
let c = sub(12,5)
console.log(c)  //7

console.log("-----------")


let newA = function(x,y){
    return x+y
}

console.log(newA)

let cccc = newA(12,13)

function newB(fn){
    let cccc =  fn(12,13)
    return cccc
}
let ff =newB(newA)
console.log(ff)




