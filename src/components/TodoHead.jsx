import styled from "styled-components";

const HeadBox = styled.div`
  border:1px solid tomato;
  border-radius:1em;
  padding:1em;
`;

const Title = styled.h1`
  font-size:2em;
  font-weight:bold;
  text-align: center;
`
const SreachBox = styled.div`
  display:flex;
  gap:0.5em;
`

const AddInput = styled.input.attrs({
  type: 'text',
  placeholder :'오늘 할일을 입력하세요🤔',
})`
  box-sizing:border-box;
  background:#efefef;
  outline:none;
  border:none;
  font-size:1em;
  padding:0.5em 1em;
  border-radius:1em;
  flex:1;
  &:focus{
    outline:none;
    border-width:2px;
  }
`

const AddButton = styled.button.attrs({
  type:'button',
})`
  background:tomato;
  border:0;
  border-radius:1em;
  color:#fff;
  margin-top:-0.5em;
  padding: 0.5em 1em;
  box-shadow:0 4px 0 #815a53;
  &:active{
    margin-top:0em;
    background:#815a53;
  }
  &:hover{
    margin-top:0em;
  }
`

const TodoHead = () =>{
  return(
    <HeadBox>
      <Title>Todo List</Title>
      <SreachBox>
          <AddInput/>
          <AddButton>
             할일 추가 ✨
          </AddButton>
      </SreachBox>
    </HeadBox>
  )
}

export default TodoHead;