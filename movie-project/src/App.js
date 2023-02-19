import React from 'react';
import {
  GlobalStyle,
  Container,
  Header,
  Logo,
  Menu,
  Ul,
  Li,
} from './MainStyle';
import imgLogo from './img/Logo.png';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo src={imgLogo}></Logo>
          <Menu>
            <Ul>
              <Li>홈</Li>
              <Li>국내</Li>
              <Li>해외</Li>
            </Ul>
          </Menu>
        </Header>
      </Container>
    </>
  );
};

export default App;
