
// function

// this is a function named weather there are 0 arguments on this function

function weather() {
  

let weather = prompt("What is the weather? :")

if (weather == "rainy") {
  console.log("Take your jacket/umbrella with you it may rain today")
} else {
  console.log("The weather is good today")
}
}

// this is a function named SayMyName and it also has 0 arguments


function SayMyName() {
  console.log("Hello")
}

// SayMyName()
// weather()

// this is a function named greeting and it has a single argument named name


// function greeting(name) {
//   greet = `Hey ${name} nice to meet you!`
//   console.log(greet)
// }

// // greeting("John")



// function sum(a,b) {

//   sum = a + b
//   console.log(sum)
// }

// sum(10,20)

// Arrow Functions : =>

// If you use arrow functions remember to remove the curly brackets



// function sum1() {


   // a = prompt("Enter the first number")
  // b = prompt("Enter the second number")

  // sum = a + b
  // console.log(sum)
// }

// sum1()


//Arrays


const names = ['John', 'Mary', 'Michael', 'Linda', 'James', 'Patricia', 'David', 'Elizabeth', 'William', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen', 'Daniel', 'Lisa']


// for (let i = 0; i<names.length; i++) {
//   console.log(i,names[i])
// }

for (const name of names) {
  console.log(name)
}





// console.log(names)
// console.log(names[0])


// //grab the third index
// console.log(names[3])

// it starts from 0

// adds something at the last
// names.push("Array")
// console.log(names)

// names.push("R")
// console.log(names)




// arrays methods


// slice = to remove and print some specific thhings
// push = add something in a const
// index0f = to print the index of something for example John,Andrew,Magnus the index of john is 0 andrew is 2 and mangnus is 3
// length = starts from 1 and counts of the length


// console.log(names.slice(0,2))
// console.log(names.indexOf("Magnus"))
// console.log(names.length)


//OBJECTS



const person = {
  name : 'john',
  shirt : 'white'
}
// console.log(person.name)
// console.log(person.shirt)
// console.log(person['shirt'])
// console.log(person['name'])


person.number =  '123456789'


// console.log(person)


// person 2

// function person2() {
//   name = prompt("Enter your name")
//   age = prompt("Enter your age")
//   shirt = prompt("Enter the colour of your shirt")

//    const intro = `Hello my name is ${name}, I am ${age} years old and the colour of my shirt is ${shirt}`

//   return intro

//   console.log(intro)
// }

// person2()


// const introducer = (shirt,name)  => {

//   const person = {

//     name : name,
//     shirt : shirt,
//     owned : 100000000,
//     debth : 100000
    
//   }

//   const intro = `hi my name is ${person.name} and the colour of my shirt is ${person.shirt} and my networth is $${person.owned - person.debth}`

//   return intro

// }
// console.log(introducer('John','White'))



// var a = "1";
// var b = "1";

// var sum = parseInt(a) + parseInt(b)
// console.log(sum)




