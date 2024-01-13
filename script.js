// window.addEventListener("load", function(){
//      let headingChange = this.document.
// })
let headingChange = document.getElementById("change_heading")
headingChange.innerText = "Hello World!"

let sectionCode = document.querySelector("section")
let selectedSpan = document.querySelector(".selected")
let newDiv = document.createElement("div")
let container = document.querySelector("body")
sectionCode.appendChild(newDiv)
newDiv.classList.add("purple")
/// My rudimentary way for Q 03
// let brownColor = document.querySelector(".brown")
// brownColor.addEventListener("mouseover", function(event){
//     selectedSpan.innerText = "Brown"
// })
// brownColor.addEventListener("mouseout", function(event){
//     selectedSpan.innerText = "None!"
// })

//// Better way. from ChatGPT: - Can be used for more granular control and add specific behaviours
// let colors = ["brown", "green", "blue", "yellow", "purple"]
// colors.forEach(function(color){
//     let colorDiv = document.querySelector("." + color)
//     colorDiv.addEventListener("mouseover", function(){
//         selectedSpan.innerText = color.charAt(0).toUpperCase() + color.slice(1)
//     })
//     colorDiv.addEventListener("mouseout", function(){
//         selectedSpan.innerText = "None!"
//     })
// })
///// Best way - Rithm School Solution - This is just to get the color 
sectionCode.addEventListener("mouseover", function(event){
    selectedSpan.innerText = event.target.className
})
// let raceOver = false
// function moveDiv(cars)
// {
//     let car = document.querySelector("." + cars)
//     function move()
//     { 
//         if(raceOver) return;  
//         let startingPositionCar = parseInt(car.style.marginLeft) || 0
//         let randomNumber = Math.floor(Math.random()*5) + 1;
//         let newPositionCar = startingPositionCar + randomNumber
//         car.style.marginLeft = newPositionCar + "px"
//         if(newPositionCar < window.innerWidth - 85)
//         {
//             requestAnimationFrame(move)
//         }
//         else
//         {
//             alert("Car " + cars + " won")
//             raceOver = true
//             return
//         }
//     }
    
//     move()
// }

// let button = document.querySelector("button")
// button.addEventListener("click", function(event){
//     raceOver = false
//     moveDiv('car1')
//     moveDiv('car2')
// })



////// - Rithm school solution for car race 
let button = document.querySelector("button")
let car1 = document.querySelector(".car1")
let car2 = document.querySelector(".car2")
car1.style.marginLeft = 0
car2.style.marginLeft = 0

function reset(car1, car2)
{
    clearTimeout(car1.timer)
    clearTimeout(car2.timer)
    car1.style.marginLeft = 0
    car2.style.marginLeft = 0
    button.disabled = false
}

button.addEventListener("click", function(event){
    button.disabled = true
    car1.timer = setInterval(function(){
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px'
        if(parseInt(car1.style.marginLeft) > window.innerWidth)
        {
            alert("car1 Wins")
            reset(car1, car2)
        }
    }, 60)
    car2.timer = setInterval(function(){
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px'
        if(parseInt(car2.style.marginLeft) > window.innerWidth)
        {
            alert("car2 Wins")
            reset(car1, car2)
        }
    }, 60)
})
