const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    const target = e.target;

    if(target.tagName === "li"){
        target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

