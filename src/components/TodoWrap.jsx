import styled from 'styled-components';

const Todobox = styled.div`
  width:100vw;
  height:100vh;
  background:tomato;
`

const TodoWrap = ({children}) =>{
  return(
    <Todobox>
      {children}
    </Todobox>
  )
}

export default TodoWrap