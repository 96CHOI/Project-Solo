import React, { useState, useEffect } from 'react';
import {
  GlobalStyle,
  Container,
  Title,
  Form,
  Input,
  AddButton,
  AllClear,
  Ul,
  List,
  RemoveBt,
} from './AppStyle';

// todo
// 1. 코드 다시 보기
// 2. useState, useEffect 공부하기
// 3. 코드 정리하고 주석달아서 다시 검사 맡아

const App = () => {
  const [todoValue, setTodoValue] = useState(''); // input 입력값
  const [todos, setTodos] = useState([]); // 전체 할 일 저장될 배열

  // feat: input 할 일 입력
  const onChange = (e) => {
    setTodoValue(e.target.value);
  };

  // feat: form 동작 (입력마다 배열로 set에 저장)
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todoValue]);
    setTodoValue('');
  };

  // feat: 마운트 되었을 때 한 번 실행 (value에 입력된 할 일 데이터를 localstorage에 저장)
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  // feat: 마운트 되었을 때 딱 한 번만 실행됨.( 저장된 데이터 가져오기)
  useEffect(() => {
    const saved = localStorage.getItem('todoList');

    if (saved) {
      const parsed = JSON.parse(saved);
      setTodos(parsed);
    }
  }, []);

  // feat : localstorage에 저장된 값 전체 삭제
  const allDelete = () => {
    localStorage.clear();
    setTodos([]);
  };

  // feat: 개별 목록에 저장된 할 일앱 1개씩 삭제
  const deleteBt = (index) => {
    let removeItem = todos.filter((el) => el !== index);
    setTodos(removeItem);
  };

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
          <AllClear type="button" onClick={allDelete}>
            전체삭제
          </AllClear>
        </Form>

        <Ul>
          {todos.map((item, index) => (
            <List key={index}>
              {item}
              <RemoveBt onClick={() => deleteBt(todos[index])}>삭제</RemoveBt>
            </List>
          ))}
        </Ul>
      </Container>
    </>
  );
};

export default App;
