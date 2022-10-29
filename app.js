let button1 = document.querySelector("#btn1")

button1.addEventListener("click" , ()=>{
    alert("I AM A LOGIN BUTTON")
})

let button2 = document.querySelector("#btn2")

button2.addEventListener("click" , ()=>{
    alert("I AM LOG OUT BUTTON")
})

let button3 = document.querySelector("#btn3")

button3.addEventListener("click", ()=>{
    alert("I AM A SEND BUTTON")
})

let button4 = document.querySelector("#btn4")

button4.addEventListener("click" , ()=>{
    alert("I AM ASUBMIT BUTTON")
})


let button5 = document.querySelector("#btn5")

button5.addEventListener("click" , ()=>{
    alert("I AM A RESET BUTTON")
})

let button6 = document.querySelector("#btn6")

button6.addEventListener("click" , ()=>{
    alert("I AM A BACK BUTTON")
})


let butt = document.querySelectorAll(".btnall")

butt.forEach(function click(data){
    data.addEventListener("click" , ()=>{
        alert("WE ALL ARE BUTTONS")
    })
})
