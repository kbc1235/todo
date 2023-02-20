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

const ContBox = styled.div`
  width:calc(100% - 150px);
`

const ButtonBox = styled.div`
  display:flex;
  width:150px;
  gap:1em;
`
const Button = styled.button.attrs({
  type:'button'
})`
  flex:1;


`;
const TodoItem = ({text}) =>{
  return(
    <Item>
      <ContBox>{text}</ContBox>
      <ButtonBox>
          <Button>삭제</Button>
          <Button>수정</Button>
      </ButtonBox>
    </Item>
  )
}

export default TodoItem;