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

////  =====  Events  ====== ////

//** == innerHTML Todo and Add == */
const generateTodo = (todo) => {
  let text = `
    <li class="todo-item">
    <span class="todo-text" >
      ${todo}
    </span>
     <i class="fa-solid fa-trash delete"></i>
    </li>
    `;
  //> Add HTML >
  todoContainer.innerHTML += text;
};

//** == Add Todo == */
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create >
  // El método trim( ) elimina los espacios en blanco en ambos extremos del string.>
  let todo = input.value.trim();

  //> Generate  all todo value  of the input>
  if (todo) {
    generateTodo(todo);
    //> Clear form>
    // El método HTMLFormElement.reset() restaura los elementos de un formulario a sus valores por defecto.>
    todoForm.reset();
  }
});

//** == Delete Tod  */
// La propiedad de sólo lectura de Nodo.parentElement devuelve el nodo padre del DOM Element, o null, si el nodo no tiene padre o si el padre no es un Element DOM .
todoContainer.addEventListener("click", (e) => {
  //if the clicked target conians the delete class, then delete item
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//** << Toggle Completed >> */
// La propiedad target de la interfaz del event.currentTarget es una referencia al objeto en el cual se lanzo el evento. Es diferente de event.currentTarget donde el controlador de eventos (event handler) es llamado durante la fase de bubbling or capturing del evento.
todoContainer.addEventListener("dblclick", (e) => {
  // Toggle Class>
  if (e.target.classList.contains("todo-item")) {
    e.target.classList.toggle("completed");
  }
});
