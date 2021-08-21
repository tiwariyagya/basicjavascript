
let numbers =[1,2,3,4,5]
//filter odd values
function isOdd(x) {
    return x % 2 ==0
}
 let output = numbers.filter(isOdd)

console.log(output)

//sum or max

function findSum(numbers) {
    let sum = 0;
    for(let i=0 ; i < numbers.length ; i++){
    sum = sum + numbers[i]
}
return sum;
}
console.log(findSum(numbers))

