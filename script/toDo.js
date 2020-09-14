const form = document.querySelector(".js-to-do"),
input = document.querySelector(".js-add-to-do");
let ul = document.querySelector(".js-list");
//1. 사용자에게 할 일을 받는다 -> form submit 막기
//2. todolist에 넣어준다 -> todolist html에 보여준다
//3. localstorage 저장

form.addEventListener("submit", handleSubmit);
let todoList = [];

// 삭제 3번
// html에서 삭제
// todolist에서 삭제
// localstorage에서 삭제

function maxID(){
    let maxId = 0;
    for(let i = 0; i < todoList.length; i++){
        if(maxId < todoList[i].id){
            maxId = todoList[i].id;
        }
    }
    console.log(maxId);
    return maxId;
}

function handleDelete(event){
    let target = event.target; //span
    let li = target.parentElement; //한.줄
    let ul = li.parentElement; //테이블
    let toDoID = li.id;
    //delete li = from ul where li.id = click한 애
    ul.removeChild(li);
    todoList = todoList.filter(function(toDo){
        return toDo.id !== parseInt(toDoID);
    });
    saveToLS();
}

function handleSubmit(event){
    event.preventDefault();
    let value = input.value;
    input.value = "";
    addTodos(value);
}

function saveToLS(){
    let stringTodolist = JSON.stringify(todoList);
    localStorage.setItem("todoLS", stringTodolist);
}

function saveTodo(input){
    let todoID = maxID() + 1;
    let todoObj = {
        id : todoID,
        value : input
    };

    // todoList[todoID] = todoObj;
    todoList.push(todoObj);
    saveToLS();
}

function addTodos(text){
    let li = document.createElement("li");
    li.id = todoList.length+1;
    let span = document.createElement("span");
    let label = document.createElement("label");
    span.innerHTML = "❌";
    label.innerHTML = text;
    span.className = "toDo__button";
    li.className = "toDo";
    li.appendChild(span);
    li.appendChild(label);
    ul.append(li);
    saveTodo(text);
    span.addEventListener("click",handleDelete);
}

function loadToDos(){
    let loadTodos = localStorage.getItem("todoLS");
    if(loadTodos !== null){ //자료형 타입까지 비교
        let getLStodo = JSON.parse(loadTodos);
        getLStodo.forEach(function(todo){
            addTodos(todo.value);
        });  
    }
}

function init(){
    loadToDos();
}

init();