import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const BodyBox = styled.div`
  width: 100%;
  min-height: 150px;
  border: 1px solid tomato;
  margin-top: 1em;
  border-radius: 1em;
  padding: 1em;
  box-sizing: border-box;
`;

const SreachBox = styled.div`
  display: flex;
  gap: 0.5em;
`;

const AddInput = styled.input.attrs({
  type: "text",
  placeholder: "오늘 할일을 입력하세요🤔",
})`
  box-sizing: border-box;
  background: #efefef;
  outline: none;
  border: none;
  font-size: 1em;
  padding: 0.5em 1em;
  border-radius: 1em;
  flex: 1;
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
  border-radius: 1em;
  color: #fff;
  margin-top: -0.5em;
  padding: 0.5em 1em;
  box-shadow: 0 4px 0 #815a53;
  &:active {
    margin-top: 0em;
    background: #815a53;
  }
  &:hover {
    margin-top: 0em;
  }
`;

const TodoList = styled.ul`
  width: 100%;
  max-height: 300px;
  margin-top: 2em;
  padding: 0;
  overflow:auto;
  & > li + li {
    margin-top: 0.5em;
  }
`;

const TodoBody = () => {
  const inputRef = useRef(null);
  const dataId = useRef(4);
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([]);

  const inputChange = (e) =>{
    setText(inputRef.current.value)
    console.log(text)
  }
  const addTodo = () => {
    if(text !== ''){
      setTodo(todo.concat({
        id:dataId.current,
        todoText:text
      }))
      dataId.current += 1;
      setText('');
      inputRef.current.value = "";
    }
  };

  const del = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id))
  }
  const edit = () =>{

  }

  const TodoItems = todo.map((data) => <TodoItem text={data.todoText} key={data.id} del={()=>del(data.id)} editTodo={edit}/>);

  return (
    <BodyBox>
      <SreachBox>
        <AddInput  onChange={inputChange} ref={inputRef} />
        <AddButton onClick={addTodo}>할일 추가 ✨</AddButton>
      </SreachBox>
      <TodoList>{TodoItems}</TodoList>
    </BodyBox>
  );
};

export default TodoBody;
