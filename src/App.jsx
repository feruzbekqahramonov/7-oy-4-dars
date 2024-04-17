
import plus from "./assets/Plus.svg";
import "./App.css";
import TodoApp from'./components/TodoApp'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todoRef = useRef(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
 
  const validate = () => {
    if (!todoRef.current.value.trim()) {
      alert("Information is required!");
      return false;
    }
    if (todoRef.current.value.length <= 3 || todoRef.current.value.length >= 45) {
      alert("The number of characters will not be so!");
      return false;
    }
    return true;
  };

  function handleForm(e) {
    e.preventDefault();
    const isValidate = validate();
    if (isValidate) {
      const todo = {
        name: todoRef.current.value,
        id: Date.now(),
        status: false
      };
      dispatch({ type: "ADD", payload: todo });
      todoRef.current.value = null
    }
  }


 
  const [activeTodos, setActiveTodos] = useState([])
  const [inactiveTodos, setInActiveTodos] = useState([])
  const todoss = useSelector(state => state.todos.todos);
  
  useEffect(() => {
    let active = todoss.filter(el => {
      return el.status == false
    })

    setActiveTodos(active)
    let inactive = todoss.filter(el => {
      return el.status == true
    }) 
    setInActiveTodos(inactive)
  }, [todoss])
  console.log(todoss);
  return (
    <>
      <div className="containeer">
        <div className="header_input">
          <input ref={todoRef} type="text" placeholder="Add a new task" />
          <img src={plus} alt="plus" className="image" onClick={handleForm} />
        </div>
        <div className="tasks_todo">
          <p className="title">Tasks to do - {activeTodos.length}</p>
          <div className="todo_cards" >
            {todoss.length > 0 &&
              activeTodos.map((todo, index) => {
                return (
                 <TodoApp title = {todo.name} id={todo.id} key = {index} status ={todo.status}/>
                );
              })}
          </div>
        </div>
        <div className="tasks_todo">
          <p className="title">Done - {inactiveTodos.length}</p>
          <div className="todo_cards" >
            {todos.length > 0 &&
              inactiveTodos.map((todo, index) => {
                return (
                 <TodoApp title = {todo.name} id={todo.id} key = {index} status = {todo.status}/>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
