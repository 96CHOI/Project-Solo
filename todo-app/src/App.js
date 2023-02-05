import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// import { errorAlert } from '../src/libs/alert';
import swal from 'sweetalert';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
    localStorage.setItem('todos', todo);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === '') {
      // errorAlert('할 일을 입력하세요.');
      swal('작성 실패!', '할 일을 입력해주세요.', 'error');
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    localStorage.setItem('todos', todos);
    setTodo('');
  };
  // const getlocal = () => {
  //   localStorage.getItem('todos');
  // };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>오늘의 할 일</Title>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="할 일을 입력하세요."
            onChange={onChange}
            value={todo}
          />
          <AddButton>추가</AddButton>
        </Form>

        <Ul>
          {todos.map((item, index) => (
            <List key={index}>{item}</List>
          ))}
        </Ul>
      </Container>
    </>
  );
}

// css in js
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(244, 222, 222, 0.4);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 70vw;
  flex-direction: column;
  row-gap: 1em;
  padding-top: 2rem;

  font-size: 1.5rem;
  font-weight: bold;
  color: #6c567b;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #6c567b;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 10vh;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #6c567b;
`;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #f67280;

  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;
const AddButton = styled.button`
  background: none;
  outline: none;
  border: none;
  color: #f67280;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 70vw;
  height: 70vh;
`;
const List = styled.li`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 990;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #f67280;
  cursor: pointer;

  background-color: white;
`;

export default App;
