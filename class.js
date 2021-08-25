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



// Setting the properties at the time of object creation  //this is the right way to set the properties

class vehicle2{
   constructor(mk,clr,manu,yrs){

      this.make = mk
      this.color = clr
      this.manufactured = manu
      this.years = yrs
   }
}


let highlander =new vehicle2("toyota","black",2015,6)

console.log(highlander)






