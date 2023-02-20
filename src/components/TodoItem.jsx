import styled from "styled-components";

const Item = styled.li`
  display:flex;
  width:100%;
  height:50px;
  padding:0 1em;
  align-items: center;
  background:#e7e7e7;
  font-size:1.2em;
  box-sizing:border-box;
  font-weight:700;
`

const TodoItem = ({text}) =>{
  return(
    <Item>{text}</Item>
  )
}

export default TodoItem;