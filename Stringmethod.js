let Name= "Yagya Tiwari"
console.log(typeof Name)

let fifthName= "Rohan Sooka"
 let count = 0
for(let i = 0 ; i<fifthName.length ; i++){
    if(fifthName[i]== 'o'){
        count = count+1
    }
}
console.log(count)

console.log('-----------')

// ways to print the string  

console.log('Iam new to js')
console.log("I am new to js")
console.log("I am new to js please help with 'book' ")


console.log('-----------')


let sixName= "amol"
let sevenName = "rao"

// string concatination
console.log(sixName + " "+sevenName)
// console.log(sixName.toUpperCase[0] + " "+sevenName.toUpperCase[0] can we change to first letter of the name in capital


console.log('-----------')


// string interpolation 
let firstNamee = "Yagya"
let secondNamee = "Tiwari"

console.log('-----------')

console.log("My first name is "+firstNamee+" and my last name is "+secondNamee+"")

console.log('-----------')

console.log(`My firstname is ${firstNamee} and my last name is ${secondNamee}`)

// string + string -- string
// string + number -- number
// string + string -- string
// number + number -- number

// methods of strings

function add(x,y){
     console.log(x+y)
    return x+y 

}

let g=add(12,13)
console.log(g)
console.log(g+10)


// action - to find index of character passes 
// return type

console.log('-------------')
let tenName ="chinmay"
let iNo = tenName.indexOf ('h')
let ino2 = tenName.indexOf('e')

console.log(iNo)
console.log(ino2)

console.log('-----------')

// Methods 
// 1) Methods perform some application 
// 2) Methods returns something

 let fruit = "Grapes"
//  0 1 2 3 4 5 
//  G r a p e s

let hs= fruit.indexOf('r')
console.log(hs)

let fruits = "apple grapes banana mango"
let userInput = "apple"
let indexF = fruits.indexOf(userInput)
console.log(indexF)

console.log('-----------')

if(indexF>=0){
    console.log('Fruit is available')
}
else{
console.log('Fruit is not available')
}

let fruitA = "apple"
console.log(fruitA[0].toUpperCase()+fruitA.slice(1,))



console.log('-----------')

// slice
// let textone = "Yagya"

// Action to get the substring
//  It returns me another string 
// textOne.slice(start, end)
//  0 1 2 3 4 5
//  T I W A R I
// -6-5-4-3-2-1 
let textTwo = "Tiwari"
let textTwoB= textTwo.slice(4,6)


console.log(textTwoB)


console.log('-----------')

let textTwoC= textTwo.slice(-4,-6)  
console.log(textTwoC)// ( what its mean, this index is not representing the actual value ) Answer=blank
textTwoD= textTwo.slice(-3,-1)
console.log(textTwoD)

console.log('-----------')

// substring
            // 0 1 2 3 4
let textThree="Ma n g o"
            //-5-4-3-2-1
 let hh= textThree.substring(1,4)
 let hg = textThree.substring(1,-3)  //( substring doesn't give negative value) //blank
 
 console.log('-----------')

console.log(textThree.substring(1,4))

 console.log("------------")
 
 console.log(hg)
 
 console.log("######")
 
 console.log(hh)

 console.log("******")
let textFour = "Grapes"
let ff = textFour.substring(1,3) //ra
 console.log(ff)
// substr
 let hy = textFour.substr(4) //es
 
 console.log('-----------')

 console.log(hy)
let xx = textFour.substr(-1) //s

console.log('-----------')

console.log(xx)

// replace
let textFive= "I am learning python"
let pj=textFive.replace("python","javascript")


console.log(pj)


console.log('-----------')

// API- application programming interface

// concat
let textSix= "amol"
let textSeven="rao"
console.log(textSix+textSeven)


console.log('-----------')

console.log(textSix.concat(textSeven))



let textEight= " Sarswati Pradhan "
console.log(textEight.length)
console.log(textEight.trim().length)

// charArt      01234567(index)  
let textNine = "NewWords"
let y= textNine.charAt(3) // W passing the index


console.log('-----------')


console.log(y)




