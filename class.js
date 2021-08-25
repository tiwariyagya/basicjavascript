// user defined data type

// let place ={
//     country: "china",
//     language:"chinese"
//    }

// let place1 ={
//     country: "france",
//     language:"french"
//    }
// let place1 ={
//     country: "india",
//     language:"hindi"
//    }

   class vehicle{
       make=null
       color=null
       manufactured=null
       years=null
   }


   let mustang= new vehicle()

   {
    make:null
    color:null
    manufactured:null
    years:null

   }

   console.log(mustang)


   // setting  the object properties outside the class 



   mustang.years=2017
 
   console.log(mustang)

 console.log("------------")

  let highlander = new vehicle()

  {
   make:null
   color:null
   manufactured:null
   years:null

  }

highlander.color="silver" 
console.log(highlander)

console.log("------------")

highlander.make="Toyota"
highlander.color="black"
highlander.manufactured=2017,
highlander.years=5

console.log(highlander)


console.log("-------------")


// Setting the properties at the time of object creation  //this is the right way to set the properties

class vehicle2{
   constructor(mk,clr,manu,yrs){

      this.make = mk
      this.color = clr
      this.manufactured = manu
      this.years = yrs             // if we need to write year(s) in this form how can we write it?
   }
}


let highlander1 =new vehicle2("toyota","black",2015,5)

console.log(highlander1)


console.log("--------");



let Mustang1 = new vehicle2("ford","red",2016,6)

console.log(Mustang1)

console.log("---------------")

let passport = new vehicle2("honda","black",2020,1)

console.log(passport)

console.log("------------------")

// let yearss = [highlander1,Mustang1,passport]

// let averageyears =yearss.reduce(function(acc,el){
//    return acc +el.years
// },0)

// console.log(averageyears/yearss.length)// NaN .why its says nan


// console.log("---------------")


// let fordVehicle = yearss.find(function(el){
//    return el.years==6

// },0)

// console.log(fordVehicle)


// creating the class in three ways:
// outside the class
// using the contractors , which property for an object at the time of making class
// onject creation

// Setting the property for object using function


class vehicle3{
   make=null
   model=null



   setModel(mdl){
      this.model = mdl
   }
   setMake(mk){
      this.make = mk
   }



}

let Rav4 = new vehicle3()
Rav4.setModel("Toyota")
Rav4.setMake(2017)
console.log(Rav4)




