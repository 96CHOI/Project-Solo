import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

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
    /* background-color: #38393E; */
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
  text-align: center;
  cursor: pointer;
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
const AllClear = styled.button`
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
  width: 50vw;
  height: 70vh;
`;
const List = styled.li`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 990;
  width: 100%;
  height: 40px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #f67280;
  cursor: pointer;
  background-color: white;
`;
const RemoveBt = styled.button`
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

export {
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
};
