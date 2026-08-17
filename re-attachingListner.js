

document.body.style.backgroundColor = "grey";
let all= document.querySelector("#all")
let input = document.getElementById("input_element");
let addbutton = document.getElementById("button");


let ul = document.createElement("ul");
ul.classList.add("overflow-auto");
ul.style.height = "300px";

let input_list = JSON.parse(localStorage.getItem("List")) || [];

function renderList(){
    ul.innerHTML = "";

input_list.forEach((element,index) => {
    let li = document.createElement("li");
    li.textContent = element;
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete","btn","btn-danger","btn-sm");
    deleteButton.dataset.index = index;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click",()=>{
        input_list.splice(index,1);
        localStorage.setItem("List",JSON.stringify(input_list));
        renderList();
    });
    let editButton = document.createElement("button");
    editButton.classList.add("edit","btn","btn-secondary" ,"btn-sm");
    editButton.dataset.index = index;
    editButton.textContent = "Edit";
    editButton.addEventListener("click",()=>{
        let input_edit = document.createElement("input");
        input_edit.type = "text";
        input_edit.value = input_list[index];
        li.firstChild.replaceWith(input_edit);
        editButton.textContent = "Save";
        editButton.classList.remove("edit");
        editButton.classList.add("save");
        editButton.addEventListener("click",()=>{
            input_list[index]=input_edit.value;
            localStorage.setItem("List",JSON.stringify(input_list));
            renderList();
        });

       });
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    ul.appendChild(li);
});

}

addbutton.addEventListener("click",()=>{
     if(input.value == ""){
        alert("Please enter something");
     }
     else{
        input_list.push(input.value);
        localStorage.setItem("List",JSON.stringify(input_list));
        renderList();
        input.value = "";
    }
     

});




renderList();
all.appendChild(ul);


