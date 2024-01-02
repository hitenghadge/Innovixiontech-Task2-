const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
}
inputBox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) 
    { 
        event.preventDefault();
        addTask();
    }
})


listcontainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
