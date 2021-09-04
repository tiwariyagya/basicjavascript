// #1 convert to string 
let aaa = '4a3b2cd'

// console.log(Number('4'))
// console.log(Number('c'))
let aaaa = aaa.split("")
console.log(aaaa)
let blk = " "
// let ab=Number('5')
// console.log(ab)
// console.log(typeof ab)
for(let i=0 ; i < aaaa.length ; i++){
    if(typeof Number(aaaa[i]) === 'number'){            //why this letter case doesn't matter
    
        blk = blk + String(aaaa[i+1]).repeat(aaaa[i])
    }
}

console.log(blk)

// // console.log('a'.repeat(4))

// console.log("--------")

// #1 convert to string 
// let aaa1 = 'aaaabbbccd'  //4a3b2cd

// // console.log(Number('4'))
// // console.log(Number('c'))
// let aaaa2 = aaa1.split("")
// // console.log(aaaa)
// let blk1 = " "

// for(let i=0 ; i < aaaa1.length ; i++){
//     if(typeof String(aaaa1[i]) === 'string'){            
//         blk = blk + String(aaaa1[i+1]).repeat(aaaa1[i])
//     }
    
// }

//  console.log(blk)
