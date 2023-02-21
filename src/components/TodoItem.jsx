import { useState } from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  padding: 0 1em;
  align-items: center;
  background: #e7e7e7;
  font-size: 1.2em;
  box-sizing: border-box;
  font-weight: 700;
`;

const ContBox = styled.div`
  width: calc(100% - 180px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 150px;
  gap: 0.2em;
  margin-left: auto;
`;
const Button = styled.button.attrs({
  type: "button",
})`
  border: 1px solid ${(porps) => (porps.cansel ? "#f4332b" : "#3617ce")};
  padding: 0.5em;
  color: ${(porps) => (porps.cansel ? "#f4332b" : "#3617ce")};
  flex: 1;
  &:hover {
    color: #fff;
    background: ${(porps) => (porps.cansel ? "#f4332b" : "#3617ce")};
  }
`;
const EditBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #e7e7e7;
`;
const EditInput = styled.input.attrs({
  type: "text",
})`
  width: calc(100% - 75px);
  border: none;
  outline: none;
  font-size: 1.2em;
  font-weight: 700;
  padding: 0 1em;
`;
const EditButton = styled.button.attrs({
  type: "button",
})`
  width: 75px;
  border: 1px solid ${(porps) => (porps.cansel ? "#f4332b" : "#00cc03")};
  padding: 0.2em;
  color: ${(porps) => (porps.cansel ? "#f4332b" : "#00cc03")};
  background-color: #fff;
  &:hover {
    color: #fff;
    background: ${(porps) => (porps.cansel ? "#f4332b" : "#00cc03")};
  }
`;

const TodoItem = ({ text, del, editTodo }) => {
  const [editOn, setEditOn] = useState(false);

  const edit = () => {
    setEditOn(true);
  };

  const editClose = () =>{
    setEditOn(false);
  }

  return (
    <Item>
      {editOn && (
        <EditBox>
          <EditInput />
          <ButtonBox>
            <EditButton onClick={editTodo}>확인</EditButton>
            <EditButton cansel onClick={editClose}>취소</EditButton>
          </ButtonBox>
        </EditBox>
      )}
      <ContBox>{text}</ContBox>
      <ButtonBox>
        <Button cansel onClick={del}>
          삭제
        </Button>
        <Button onClick={edit}>수정</Button>
      </ButtonBox>
    </Item>
  );
};

export default TodoItem;
