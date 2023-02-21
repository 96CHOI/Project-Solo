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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <HeaderGroup>
            <Logo />
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
