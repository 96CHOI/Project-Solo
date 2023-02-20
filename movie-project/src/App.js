import React from 'react';
import {
  GlobalStyle,
  Container,
  Header,
  Logo,
  Search,
  Input,
} from './MainStyle';
import imgLogo from './img/Logo.png';
import { IoSearch } from 'react-icons/io5';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo src={imgLogo}></Logo>
          <Search>
            <Input />
            <IoSearch />
          </Search>
        </Header>
      </Container>
    </>
  );
};

export default App;
