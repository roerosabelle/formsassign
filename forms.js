let todoArr = [];
const todoField = document.querySelector("#todoField");
const sectionTag = document.querySelector("section");

document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();

    todoArr.push(todoField.value);
    
    let template = todoArr.map(list => `
        <h4>Todo: ${list} </h4>
    `);
    sectionTag.innerHTML = template.join('');
});