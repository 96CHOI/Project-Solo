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
  width: 200px;
  height: 100px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  height: 100px;
  background-color: skyblue;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export { GlobalStyle, Container, Header, Logo, Menu, Ul, Li };
