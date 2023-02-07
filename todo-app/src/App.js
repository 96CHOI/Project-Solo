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

function App() {
  // input 입력값
  const [todoValue, setTodoValue] = useState('');
  // 저장 공간 (콜백 함수) 다시한번 봐야함
  const [todos, setTodos] = useState((id) => {
    if (window !== '') {
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

  // input 할 일 입력
  const onChange = (e) => {
    setTodoValue(e.target.value);
  };

  // input 작성되면, newTodo값을 변경해줌.
  useEffect(() => setNewTodos(''), [todoValue]);

  // form 동작 (입력마다 배열로 set에 저장)
  const onSubmit = (e) => {
    e.preventDefault();

    setNewTodos(todoValue);
    setTodos([...todos, todoValue]);
    setTodoValue('');
  };

  // 저장 값 전체 삭제
  const allDelete = () => {
    localStorage.clear();
    window.location.reload();
  };

  // map으로 저장된 값 표현하기
  const todosMap = todos.map((item, index) => (
    <List key={index}>
      {item}
      <RemoveBt onClick={() => deleteBt(todos[index])}>삭제</RemoveBt>
    </List>
  ));

  // 개별 삭제버튼
  const deleteBt = (index) => {
    let removeItem = todos.filter((el) => el !== index);

    // console.log(removeItem);
    setTodos(removeItem);
  };

  //인풋에 todo값들을 입력할 때마다, localStorage에 저장한다.
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
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
          <AllClear type="button" onClick={allDelete}>
            전체삭제
          </AllClear>
        </Form>

        <Ul className="todosMap">{todosMap}</Ul>
      </Container>
    </>
  );
}

export default App;
