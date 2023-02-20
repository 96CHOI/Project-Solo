import React from 'react';
import {
  GlobalStyle,
  Container,
  Header,
  Logo,
  Search,
  Input,
  SearchIcon,
  HeaderGroup,
} from './MainStyle';
import imgLogo from './img/Logo.png';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <HeaderGroup>
            <Logo src={imgLogo}></Logo>
            <Search>
              <Input />
              <SearchIcon />
            </Search>
          </HeaderGroup>
        </Header>
      </Container>
    </>
  );
};

export default App;
