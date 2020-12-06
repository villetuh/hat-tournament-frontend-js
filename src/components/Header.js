import React from 'react';

import { HeaderContainer } from './styled/lib';
import LoginControls from './LoginControls';
import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <LoginControls />
    </HeaderContainer>
  );
};

export default Header;
