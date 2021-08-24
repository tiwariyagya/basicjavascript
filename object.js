//let place = ["pkr","chtwn","ktm",76052,76001,78901]

let place = {
    province: "gandaki",
    location:"pkr",
    zipCode:76052,   
    areaCode:+469


}


console.log(place.areaCode)
console.log(place.province)
console.log(place.location)
console.log(place.zipCode)

console.log("-----------")
// bracket notation 

console.log(place["province"])
console.log(place["areaCode"])
console.log(place["location"])
console.log(place["zipCode"])

console.log('-----------')

//updating the value for object

place.province= "narayani"
console.log(place.province)
console.log(place)
console.log("-------")

//add the property

place.language = "Nepali"
console.log(place)

place.language ="Newari"
console.log(place)


//delete 

delete place.language
console.log(place)

//for loop 
// dot operator doesnot work correctly inside for loop
for(let x in place){
    console.log(x,place[x])
}

console.log("--------------")

let employee =[
     {
         employeeName: "Shekhar das",
         department : "CMT"
    },
    {
        employeeName: "Santosh mahat", 
        department : "GEO"
    },
    {
        employeeName: "Mike Tupa", 
        department : "STEEL"
    },
    {
        employeeName: "Naan lee", 
        department : "GEO"
                                      //how can i print the employee name with referance of department
    },

]



console.log("-------------")

for(let i=0; i<employee.length; i++){
    let obj = employee[i]
    for(let x in obj){
        console.log(`${x}:${obj[x]}`)
    }

}

console.log("-------------")

console.log()

console.log(employee[3].department)
console.log(employee[3]['department'])


console.log('-------')


let cellphones = [
    {
        model: "nokia",
        price: 100,
        feature: ["frontcamera","backamera","windowsoperating"]
    },
    {
            model: "samsung",
            price: 300,
            feature: ["2mpfrontcamera","8mpbackamera","androidoperating"]
    },  
    {
        model: "iPhone",
        price: 500,
        feature: ["8mpfrontcamera","12mpbackcamera","iosoperating"]
},
]     


console.log(cellphones[0].model,cellphones[0].feature.length)

console.log("-------------")

// print name and skills for every student in array

for(let i=0; i<cellphones.length;i++){         //IS it right?
console.log(cellphones[i].model,cellphones[i].feature) //nokia2310 [ 'frontcamera', 'backamera', 'windowsoperating' ]
                                                       //samsung [ '2mpfrontcamera', '8mpbackamera', 'androidoperating' ]
                                                      //iPhone [ '8mpfrontcamera', '12mpbackcamera', 'iosoperating' ]
}
     
console.log("=-======")
//find

let look = cellphones.find(function(el,index,arr){
    return el.model=="nokia"

})
console.log(look)

console.log("------------")

// fidindex

let looke = cellphones.findIndex(function(el,index,arr){
    return el.model=="nokia"
})
console.log(looke)

console.log("------------")

// comparsion

console.log(6==6)


console.log("------------")


// every some ---------->true false

let decimal =[1,5,7,10,2,25,52]

let dec = decimal.some(function(el,index,array){
    return el > 50
}) 

console.log(dec)

console.log("--------------")


let decc = decimal.every(function(el,index,array){
    return el > 50
}) 


console.log(decc)

console.log("------------")


// forEach --- similar to map, filter
// forEach does not return anything

let cities= ["dallas","huston","forthworth","bedford"]
let kk = cities.forEach(function(el,index,arr){
    console.log(`Welcome to ${el}!`)

})

console.log(kk)

console.log("---------------")
// sort

let h=["flowermound","dallas","ezyle"]
h.sort()

console.log(h)



//flat

let names =[["radha","maya","subhala"],["keshab","narayan","hari"]]
let k=names.flat()
console.log(names[1][1])
console.log(k)


// highest numbers from numbers
let arr =[[1,5,3],[33,45,33],[2,500,1]]
let arrt = arr.flat()
// console.log(arrt)
let highest =arrt[0]
for(let i=0 ; i<arrt.length;i++){
  if (arrt[i] >= highest){
    highest=arrt[i]
  }
}

console.log(highest)


console.log("----------------")

// fill

let r =["radha","maya","subhala","keshab","narayan","hari"]

console.log(r.fill('a',1,r.length))
