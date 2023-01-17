import "./App.css";
import Add from "./components/Add";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <div className="head">
        <div className="title">Todo List</div>
      </div>
      <Add />
      <List />
    </div>
  );
}
export default App;
