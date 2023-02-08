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
  // const [newTodos, setNewTodos] = useState(''); // 새로운 입력 값

  // 저장 공간 (콜백 함수) 다시한번 봐야함
  // const [todos, setTodos] = useState((id) => {
  //   if (window !== '') {
  //     // component 가 마운트가 되었다면 componentDidMount
  //     const saved = window.localStorage.getItem('todoList');
  //     if (saved) {
  //       return JSON.parse(saved);
  //     } else {
  //       return [];
  //     }
  //   }
  // });

  // 마운트 되었을 때 딱 한 번
  useEffect(() => {
    const saved = localStorage.getItem('todoList');

    if (saved) {
      const parsed = JSON.parse(saved);
      setTodos(parsed);
    }
  }, []);

  // feat: input 할 일 입력
  const onChange = (e) => {
    setTodoValue(e.target.value);
  };

  // feat: form 동작 (입력마다 배열로 set에 저장)
  const onSubmit = (e) => {
    e.preventDefault();

    // setNewTodos(todoValue);
    setTodos([...todos, todoValue]);
    setTodoValue('');
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  // input 작성되면, newTodo값을 변경해줌.
  // useEffect(() => setNewTodos(''), [todoValue]);

  // 저장 값 전체 삭제
  const allDelete = () => {
    localStorage.clear();
    // window.location.reload();
    setTodos([]);
  };

  // 개별 삭제버튼
  const deleteBt = (index) => {
    let removeItem = todos.filter((el) => el !== index);

    // console.log(removeItem);
    setTodos(removeItem);
  };

  //인풋에 todo값들을 입력할 때마다, localStorage에 저장한다.
  // useEffect(() => {
  //   localStorage.setItem('todoList', JSON.stringify(todos));
  // }, [todos]);

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
