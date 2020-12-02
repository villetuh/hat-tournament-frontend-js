import React from 'react';

import { AppTitle, HeaderContainer } from './styled/lib';
import LoginControls from './LoginControls';

const Header = () => {
  return (
    <HeaderContainer>
      <AppTitle>HattyApp</AppTitle>
      <LoginControls />
    </HeaderContainer>
  );
};

export default Header;
