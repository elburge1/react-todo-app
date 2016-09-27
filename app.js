const TodoForm = ({addTodo}) => {
  //input tracker

  let input;

  return (
    <div>
    <input ref={node => {
      input = node;
    }} />
    <button onClucl ={() => {
      addTodo(input.value);
      input.value = '';
    }}>
    +
    </button>
    </div>
  );
};

const Todo = ({todo, remove}) => {
  //each Todo
  return (<li onClick(remove(todo.id))>{todo.text}</li>);
}

const TodoList = ({todos, remove}) => {
  //map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul>{todoNode}</ul>);
}
