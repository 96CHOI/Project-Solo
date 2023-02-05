import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

function App() {
  // input 입력값
  const [todoValue, setTodoValue] = useState('');
  // 저장 공간 (콜백 함수) 다시한번 봐야함
  const [todos, setTodos] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('todoList');
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });
  // 새로운 입력 값
  const [newTodos, setNewTodos] = useState('');

  const onChange = (e) => {
    setTodoValue(e.target.value);
  };

  // input 작성되면, newTodo값을 변경해줌.
  useEffect(() => setNewTodos(''), [todoValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    setNewTodos(todoValue);
    setTodos([...todos, todoValue]);
    setTodoValue('');
  };

  //인풋에 todo값들을 입력할 때마다, localStorage에 저장한다.
  useEffect(() => {
    window.localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>오늘의 할 일</Title>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="할 일을 입력하세요."
            onChange={onChange}
            value={todoValue}
            required
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
