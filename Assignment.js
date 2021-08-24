//1) write a program to reverse the string
let person="chinmay"

let newName= person.split('').reverse('').join('')

console.log(newName)

console.log("------------")

//2) write a program to reverse only word from sentence
 
 let statement="My new learning is javascript"

 let newStatement= statement.split("").reverse().join("")
//  let rev= newStatement.split("").reverse().join("")
 console.log(newStatement)


console.log("------------")
// 3) Write a program to find the highest and lowest number from a given array

let input = [34,55,-500,66,77,88,234,5,0,66,88]

let max =input[0]
for(let i=0 ; i<input.length;i++){
  if (input[i] >= max){
    max=input[i]
  }
}
console.log(max)


let min =input[0]
for(let i=0 ; i<input.length;i++){
  if (input[i] < min){
    min=input[i]
  }
}
console.log(min)

console.log("-------------")
// 4)find the highest number from the to the array
let arr =[[1,2,3],[33,44,55],[55,77,343]]
let arrt = arr.flat()
// console.log(arrt)
let highest =arrt[0]
for(let i=0 ; i<arrt.length;i++){
  if (arrt[i] >= highest){
    highest=arrt[i]
  }
}

console.log(highest)

// 5) Count the number of the vowels from the string
let sentence = "I am new to javascript"
let count=0

for(let i = 0; i<sentence.length;i++){
  if(sentence[i]=="a"||sentence[i]=="e"||sentence[i]=="i"||sentence[i]=="o"||sentence[i]=="u"||sentence[i]=="A"||sentence[i]=="E"||sentence[i]=="I"||sentence[i]=="O"||sentence[i]=="U"){
    count=count+1
  }
}
console.log(count)
   

