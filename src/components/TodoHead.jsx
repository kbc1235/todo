import styled from "styled-components";

const HeadBox = styled.div`
  border-radius: 1em;
  padding: 1em;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

const TodoHead = () => {
  return (
    <HeadBox>
      <Title>Todo List</Title>
    </HeadBox>
  );
};

export default TodoHead;
