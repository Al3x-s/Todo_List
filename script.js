let count = 0

function run(){
    //gets vals of inputs
    let todoVal = document.getElementById("text__val").value
    let todoDate = document.getElementById("date__val").value

    // creates a container with 2 sub elements 
    const todoValContainer = document.createElement("div");
    const todoTextVal = document.createElement("p")
    const todoDateVal = document.createElement("p")

    //setting the inner contect of previous elements
    todoValContainer.innerHTML= ""
    todoTextVal.innerHTML = todoVal
    todoDateVal.innerHTML = todoDate

    //differenciate the classes
    count++
    let containerMix = "container" + count

    todoValContainer.id = containerMix
    todoTextVal.id = "todoID"
    todoDateVal.id = "dateID"

    document.body.appendChild(todoValContainer)
    document.getElementById(containerMix).appendChild(todoTextVal)
    document.getElementById(containerMix).appendChild(todoDateVal)

    document.getElementById(containerMix).classList.add('TODOCARD');


    let del_btn = document.createElement("button")
    del_btn.innerHTML="Delete"
    del_btn.id = containerMix
    document.getElementById(containerMix).appendChild(del_btn)

    del_btn.onclick = function(){
        let x = del_btn.id 
        document.getElementById(x).innerHTML = ""
    }
    

}