// document.getElementById("count-el").innerText = 5

// "let count be 0"
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// // console.log(count)

// let myAge = 31
// let humanDogRatio = 7 
// let myDogAge = myAge * humanDogRatio

// // console.log(myDogAge)


// // intialize the count as 0
// // listen for clicks on the increment button
// // increment the count variable when the button is clicked
// // change count-el in the HTML to reflect the new count

// function passengerCount() {
//     // console.log(42)

// }

// passengerCount()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function combinedTime() {
//     // any variables inside a function will be the local scope, anything outside is the global scope
//     let totalTime = lap1 + lap2 + lap3
//     // console.log(totalTime)
// }

// combinedTime()

// let lapsCompleted = 0

// function totalLaps() {
//     lapsCompleted = lapsCompleted + 1
// }

// totalLaps()
// totalLaps()
// totalLaps()

// console.log(lapsCompleted)

// "passing in an argument"
// let countEl = document.getElementById("count-el")
// let passengerCount = 0

// function totalPassengers() {
//     passengerCount = passengerCount + 1
//     countEl.innerText = passengerCount
// }

// function save() {
//     console.log(passengerCount)
// }

// totalPassengers()

// function minusOneSet() {
//     passengerCount = passengerCount - 1
//     countEl.innerText = passengerCount
// }

// let username = "kieran"
// let notification = "you have three new messages"

// let messageToUser = username + ", " + notification
// console.log(messageToUser)

// let myName = 42
// let greeting = "Hi, my name is "

// let myGreeting = greeting + myName
// // console.log(myGreeting)

// // console.log(4 + 5)
// // console.log("2" + "4")
// // console.log("5" + 1)
// // console.log(100 + "100")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count

}


function save() {
    let countStr = count + " - "
    // textContent is a better solution than innerText
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}