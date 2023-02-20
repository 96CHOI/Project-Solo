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
    //background-color: rgba(244, 222, 222, 0.4);
    background-color: lightblue;
    /* background-color: #38393E; */
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
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
  font-size: 1.5rem;
  font-weight: bold;
  //color: #6c567b;
  color: hotpink;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 10vh;
`;

const Logo = styled.img`
  width: 10vw;
  height: 100%;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 90vw;
  height: 100%;
`;

const Input = styled.input`
  display: flex;
  margin-right: 10px;
  height: 25%;
  border: 0;
  border-bottom: 1px solid black;
  background-color: lightblue;
`;

export { GlobalStyle, Container, Header, Logo, Search, Input };
