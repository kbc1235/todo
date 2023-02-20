import styled from "styled-components";
import TodoHead from "./TodoHead";

const MainBox = styled.div`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
  width:50vw;
  height:70vh;
  padding:1em;
  background:#fff;
  border-radius:1em;
`;

const Todo = () =>{
  return(
    <MainBox>
        <TodoHead />
    </MainBox>
  )
}

export default Todo;