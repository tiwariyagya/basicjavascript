

//object
let state={
    name:"Texas",
    location: "south",
    population: 2914505,
    nickName: "The lone star state"
}

console.log(state.nickName)

console.log("---------------")

//Array
//reduce //filter
let inAndOut = [-10,15,25,-6,-9,10,-18]


let intt = inAndOut.filter(function(el){
    return el > 0

}).reduce(function(acc,el){

    return acc + el

}, 0)
    console.log(intt)

    console.log("---------------")


//replace
let statement ="My name is Khan and i am not a terroist."

console.log(statement.replace("and","&"))


console.log("++++++++++++++")

//reduce

let staff =[1,1,12,1,14,18]
let sum = 0
for (let i=0; i<staff.length ; i++){
    sum = sum + staff[i]
}
console.log(sum/staff.length)

console.log("++++++++++")

let iii=staff.reduce (function(acc,el,index,arr){
     return acc + el
    },0) 
console.log(iii)