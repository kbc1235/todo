import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const BodyBox = styled.div`
  width: 100%;
  min-height: 150px;
  height: calc(100% - 140px);
  margin-top: 1em;
  border-radius: 1em;
  padding: 1em;
  box-sizing: border-box;
`;

const SreachBox = styled.div`
  display: flex;
  gap: 1em;
`;

const AddInput = styled.input.attrs({
  type: "text",
  placeholder: "오늘 할일을 입력하세요🤔",
})`
  box-sizing: border-box;
  background: #f3f3f3;
  outline: none;
  border: none;
  font-size: 1em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  flex: 1;
  min-height:52px;
  &:focus {
    outline: none;
    border-width: 2px;
  }
`;

const AddButton = styled.button.attrs({
  type: "button",
})`
  background: tomato;
  border: 0;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em 1.5em;
  align-items: center;
  justify-content: center;
  max-height:52px;
  font-weight:700;
  &:active {
    background: #815a53;
  }
  &:hover {
    background: #815a53;
  }
`;

const TodoList = styled.ul`
  width: 100%;
  max-height: calc(100% - 60px);
  margin-top: 1.5em;
  padding: 0;
  overflow: overlay;
  border-radius: 0.5em;
  border:1px solid #e7e7e7;
  & > li + li {
    border-top: 1px solid #e7e7e7;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const TodoBody = () => {
  const inputRef = useRef(null);
  const todoId = useRef(0);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const inputChange = () => {
    setText(inputRef.current.value);
  };

  const addTodo = () => {
    if (text !== "") {
      setTodo(
        todo.concat({
          id: todoId.current,
          todoText: text,
        })
      );
      todoId.current += 1;
      setText("");
      inputRef.current.value = "";
    }
  };

  const del = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const todoChage = (id, todoText) => {
    let newTodo = todo.map(item =>{
      if(item.id === id){
        return {...item, todoText}
      }else{
        return item
      }
    })
    setTodo(newTodo);
  };

  const TodoItems = todo.map((data) => (
    <TodoItem
      text={data.todoText}
      key={data.id}
      idx={data.id}
      del={() => del(data.id)}
      todoChage={todoChage}
    />
  ));

  return (
    <BodyBox>
      <SreachBox>
        <AddInput onChange={inputChange} ref={inputRef} />
        <AddButton onClick={addTodo}>할일 추가 🔔</AddButton>
      </SreachBox>
      <TodoList>{TodoItems}</TodoList>
    </BodyBox>
  );
};

export default TodoBody;
