//** ===>  Const or Variable === */
const container = document.querySelector(".main__container");
const submitBtn = document.querySelector("sub__btn");
const input = document.querySelector(".f__input");
const todos = document.querySelector(".todos");
const todoContainer = document.querySelector(".todo__container");
console.log(todoContainer);
const todoForm = document.querySelector(".todo__form");
console.log(todoForm);
const searchItem = document.querySelector(".todo-item");
const searchInput = document.querySelector(".search__input");
console.log(searchInput);

////  === Events ////

//** == innerHTML Todo == */
const generateTodo = (todo) => {
  let text = `
    <li class="todo-item">
    <span class="todo-text" >
      ${todo}
    </span>
     <i class="fa-solid fa-trash delete"></i>
    </li>
    `;

  todoContainer.innerHTML += text;
};

//** == Add Todo == */
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create >
  let todo = input.value.trim();

  //> Generate  all todo value  of the input>
  if (todo) {
    generateTodo(todo);
    //> Clear form>
    todoForm.reset();
  }
});
