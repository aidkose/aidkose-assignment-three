import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/form";
import TodoList from "./components/todoList/todoList";
function App() {
  return (
    <div className="App">
      <h1>CRUD TODO APP</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
