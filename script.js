const inputbox = document.getElementById("input-box");                   // select the element by id name
const listcontainer = document.getElementById("list-container");          // select the element by id name
function addtask(){
    if(inputbox.value === ''){                                       //if user add empty input task
        alert("you must write something!");
    }
    else{                                                // this is to add task
        let li = document.createElement("li");                                 // it create an element li
        li.innerHTML = inputbox.value;                      // value of input box is assigns to inner html of li
        listcontainer.appendChild(li);                        //add a new <li> element to id- list container

        // this is to delete the task, make cross icon
        let span = document.createElement("span");                 // it create an element span
        span.innerHTML="\u2716";                                  // x symbol is assign to inner html of span
        li.appendChild(span);                                //add a new <span> element to li
    }
    // this will clear the input area after adding the task
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener("click",function(e){        //This attaches a click event listener to listContainer.
    if(e.target.tagName === "LI"){                             // checks if the clicked element is a <li>.
        e.target.classList.toggle("checked");   //Adds the checked class if it's not present, removes it if it is.
        saveData();         //This function is likely used to store the updated list state (e.g., in localStorage).
    }
    else if(e.target.tagName === "SPAN"){              // checks if the clicked element is a <span>.
        e.target.parentElement.remove();        //If the clicked element is a <span> then delete the parent <li>.
        saveData();
    }
},false);
function saveData(){          // saves current state of list to localStorage so list persists across page reloads
    localStorage.setItem("data",listcontainer.innerHTML);   //setItem(key, value) method used to store data where key → "data": name of data that will be stored, value → listContainer.innerHTML : content of the listContainer that will be stored
}
function showTask(){    //to retrieve and display saved list from localStorage when the page loads or whenever you need to show the previously saved data.
    listcontainer.innerHTML = localStorage.getItem("data");   //localStorage.getItem("data") retrieves the value stored in localStorage under the key "data"
}
showTask();