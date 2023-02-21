import Todo from "./components/Todo";
import TodoWrap from "./components/TodoWrap";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoWrap>
        <Todo />
      </TodoWrap>
    </div>
  );
}

export default App;
