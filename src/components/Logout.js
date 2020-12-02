import React from 'react';

import { LogoutButton } from './styled/lib';

const Logout = ({ name, logoutUser }) => (
  <div>
    User: {name}
    <LogoutButton onClick={logoutUser}>
      Logout
    </LogoutButton>
  </div>
);

export default Logout;