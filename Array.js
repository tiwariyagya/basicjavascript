// Array

let Fruits=["apple","mango","orange"]
console.log(Fruits.length)

console.log("-----------")

let h = ["chinmay","amol","amit"]
for(let i=0 ; i<h.length; i++){
    console.log(h[i].concat(' Welcome!'))
}

console.log("-----------")


let names = ["chinmay","amol","raj","rajiv"]
let person =["chris","mortan",269029,true,[234]]

// Objects
// Objects will have properties and method

// Array
    //     0       1        2
let city=["pune","nagpur","mumbai"]

// Array stores the value by index

console.log(city[0])

console.log("-----------")

// length of Array
console.log(city.length)

console.log("-----------")//3

// last element of Array 
console.log(city[city.length-1])//mumbai

console.log("-----------")

// Repalace the value at the position 1
//  replace city[1]="bihar"
console.log(city[1])


// -----------printing every elements inside arrays-----
let fruits =['apple','orange','mango']

console.log(fruits[0])

console.log("-----------")

for(let i=0 ; i<fruits.length ; i++){
    // console.log(i)// 0 1 2
    console.log(fruits[i])//apple orange mango
}

console.log("-----------")


for(let i=fruits.length-1; i>=0 ; i--){
    //  console.log(i)// 2 1 0
     console.log(fruits[i])// mango orange apple
}


console.log("-------")

let firstName="krishna"
let ff= firstName[0].toUpperCase()+firstName.slice(1,)
console.log(ff)

// Methods 

// Action
// Return

// Adding the element at the last

let autoParts= ["frontlight","backlight","brake"]

let A= autoParts.push("tire")
console.log(A)//4

// console.log(autoParts.push("tire"))//4
console.log(autoParts)//["frontlight","backlight","brake","tire"]

console.log("------------")

// action- removes the element from last
// return- string(lastElement)

let bb = autoParts.pop()
console.log(autoParts)//['frontlight','backlight','brake']
console.log(bb)//tire
console.log(typeof bb) //string

console.log("------")     //these commands always follow up the previous one if function name is same

// shift removes the element from begining

let dd =autoParts.shift()

console.log("-----------")
console.log(dd)//frontlight
console.log("-----------")
console.log(autoParts)//['backlight','brake']


// add the element at the begining

let cc = autoParts.unshift('engine')
console.log(cc)//3
console.log(autoParts)// ['engine','backlight','brake']

                      //action                         //return(value and type)
// Push               add the element at of array        new length(number)
//pop                 removes the element from last        //string
//shift               removes the element from the begning  string 
//unshift             Add the element at the begning       new length(number)


// function add(x,y){
//     console.log(x+y)
//     return "Chinmay"

// }
// let ah =add(12,13)
// console.log(ah)


// reverse
console.log("/////////////////")
let country= ["Nepal","India","Pakistan","Bhutan"]

let ee = country.reverse()
console.log(ee)         //[ 'Bhutan', 'Pakistan', 'India', 'Nepal'] 
console.log(country)     // [ 'Bhutan', 'Pakistan', 'India', 'Nepal'] 
//console.log(country.reverse()) // [ 'Nepal', 'India', 'Pakistan', 'Bhutan']


//Action  reverse the element 
//Return  string

console.log('--------------')

let ef = country.push("United States")
console.log(ef)                //5
console.log(country)     //[ 'Bhutan', 'Pakistan', 'India', 'Nepal', 'United States' ]



console.log('--------------')



// let furniture = ["desk","bench","chair","bedframe"]
//  let fy = furniture.find()
// console.log(fy)


let birthYear = [2000,2001,1989,1990]
let ages = []
for(let i=0 ; i<birthYear.length ; i++){
    let age = 2021-birthYear[i]
    ages.push(age)
}

console.log(ages)

console.log("---------")


// map

birthYear.map(function(el,index,arr){
    console.log(el,index,arr)
})

console.log("-------")

let jj = birthYear.map(function(el,index,arr){
    return 2021-el  //[ 2021-2000, 2021-2001, 2021-1989, 2021-1990 ]
})
console.log(jj)//[ 21, 20, 32, 31 ]

console.log("--------")


 let namesa=["Krishna","Ram","Sham"]
 let uuu = namesa.map(function(el){
     return `welcome ${el}!`
 })
console.log(uuu) // [ 'welcome Krishna!', 'welcome Ram!', 'welcome Sham!' ]

console.log("--------------")


let aggg = 12
let ffName = "Kajol"
//console.log("My name is +ffname" my age is "+agg")
console.log(`My name is ${ffName} and my age is ${aggg}`)

console.log("-----------")

// filter


let agk = [14,21,20,17,13,12]
let grtThan15 = []

// for(let i = 0 ; i<agk.length ; i++){
//     if(agk[i] > 15){
//         grtThan15.push(agk[i])
//     }
   
// }

//  console.log(grtThan15)
 
 console.log("----------")


//  let kkk = agg.filter(function(el,index,arr){
//     return el > 15
// })

// console.log(kkk)

//  console.log("-------------")

// //  let kkk = ag.filter => (el,index,arr){el > 15}

// // console.log(kkk)

// console.log("------------")


// langauges = ["hindi","marathi","telg"]

// let kp = langauges.filter(function(el){ //
//    // return el.length > 4  
//    return el
// })
// console.log(kp) //[ 'hindi', 'marathi', ]

// console.log("------------")

let odd = [25,35,20,32,33]

let oddd = odd.filter(function(el){

    return el%2 !==0  // why we use explamation mark in the statement
})

console.log(oddd)

// Arrow function


let oddk = [25,35,20,32,33]

let oddy= oddk.filter((el)=>el%2 !==0  // why we use explamation mark in the statement
)

console.log(oddy)

//reduce

let dages = [12,13,15,16,18]

let iii = dages.reduce((acc,el)=> acc + el,0)


console.log(iii)










// console.log("------------")

// // let ag = [14,21,20,17,13,12]
// // let grtThan15 = []

// // for(let i = 0 ; i<ag.length ; i++){
// //     if(ag[i] > 15){
// //         grtThan15.push(ag[i])
// //     }

// // }

// // console.log(grtThan15)

// // console.log("-------------")

//  let dages = [12,13,15,16,18]
// // let sum=0
// // for(let i =0 ; i<dages.length ; i++){
// //     sum = sum + dages[i]


// // }
// // console.log(sum)
// // console.log("------")

// // console.log(sum/dages.length)


// let numberss=[18,20,16,11,25]

// let ags = []

// for(let i = 0 ; i<numberss.length ; i++){
//     if(numberss[i] > 15)
//     ags.push(numberss[i])
// }
// console.log(ags)














// // map only apply in Array

