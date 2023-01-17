import "./App.css";
import supabase from "./supabase";
import { useEffect, useState } from "react";

function App() {
  const [todo, settodo] = useState([]);
  async function fetchData() {
    let { data: todos, error } = await supabase.from("todo-list").select("*");
    settodo(todos);
    console.log(todo);
  }
  useEffect(() => {
    fetchData();
  }, []);

  // const handleChange = (e) => {
  //   setfirst((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));

  //   e.preventDefault();
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(first);
  // };
  return (
    <div className="App">
      <div className="head">
        <div className="title">Todo List</div>
        <form>
          <input className="textbox" type="text" name="todoinput" />
          <button clasName="button" type="submit">
            +
          </button>
        </form>
      </div>
      <div className="list-container">
        {todo.length ? (
          <div className="list">
            {todo.map((todoMap) => (
              <div className="item">{todoMap.todo_item}</div>
            ))}
          </div>
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
}
export default App;
