import Todo from "./components/Todo";
import TodoWrap from "./components/TodoWrap";

function App() {
  return (
    <div className="App">
        <TodoWrap>
          <Todo />
        </TodoWrap>
    </div>
  );
}

export default App;
