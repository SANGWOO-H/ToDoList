let nameDiv = document.querySelector(".js-name");

function printName(value){
    nameDiv.innerHTML = "";
    let span = document.createElement("span");
    span.className = "name__text";
    span.innerHTML = `안녕하세요 ${value}님`;
    nameDiv.appendChild(span); 

}

function handleSubmit(event){
    event.preventDefault();
    let form = event.target;
    let input = form.querySelector("input");
    localStorage.setItem("name", input.value);
    printName(input.value);
}

function makeInput(){
    let input = document.createElement("input");
    input.placeholder = "이름을 입력하세요";
    input.type = "text";
    input.className = "name__input";
    let form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    form.appendChild(input);
    nameDiv.appendChild(form);

}

function loadName(){
    let name = localStorage.getItem("name");
    if(name === null){ //자료형 타입까지 비교
        makeInput();
    }else{
        printName(name);
    }
}

function init(){
    loadName();
}

init();