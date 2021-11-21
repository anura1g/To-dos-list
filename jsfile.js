let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    let para = document.createElement('p');
    para.classList.add('paragraph-styling');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";
    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para);
    })
})