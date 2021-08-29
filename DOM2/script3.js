// index.html ---?

// if you want to show text html page, we will use mark up language and that is html

// language
// css: css is used to change properties of the default html element and add design to 
// Javascript : javascript is used to change something based on the user action
//  user action: mouseover, mouseout, click

// search for element------------>

// what is html element?
// <button    id  =     "green"   class =   "yellow">     Add       </button>         //this complete statement is html element
//   |         |            |       |          |          |               |
// openingTag atributes   value  atributes   value    html text    closing tag    
//   \                                                                    /
//    \                                                                  /
//      ------------------>  HTML ELEMENT    <---------------------------


// searching for element


let addButton = document.querySelector('button')
let Adventure = document.querySelector('h1')

console.log(addButton)
console.log(Adventure.textContent)


// Action -----------> call function ---- (create, update retrive, delete)

addButton.addEventListener('click',function(){
    Adventure.style.color="blue"
    Adventure.textContent="Thrill"
    Adventure.style.background = "pink"

})

// program 2 
// search for html element 

//based on the user action--- call back function-- either update create retrive or delete html 
//document.querySelector('h1')
// search  the element by css selector -- class and id 
// 

// what is class and what is id ?
// attributes....

// class attributes is applied whenever you want common styling across
// multiple html elements

// id-- is applied when you unique styling across single html element

let pList = document.querySelectorAll('.red')  //NodeList-->[elementOne,elementTwo,elementThree]

// console.log(pList[0].style.color="blue")
// console.log(pList[1])


addButton.addEventListener('click',function(){
    for( let i=0; i<pList.length ; i++){
        pList[i].style.color="blue"
    }
})






// let Raj ={
//     fulName: "chauthaiwala",
//     age:65


// }
// html is also one object
// // retrive ?

// console.log(Raj.fulName)

// // add property
// Raj.language="hindi"
// // update 
// Raj.fulName = "Chaudary"

// // delete

// delete Raj.age
// console.log(Raj)

