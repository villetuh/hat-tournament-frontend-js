import React, { useState } from 'react';
import styled from 'styled-components';

import { LoginButton, TextInput } from './styled/lib';

const Container = styled.div`
`;

const LoginTextInput = styled(TextInput)`
  width: 8em;
`;

const Login = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();

    await loginUser(username, password);
  };

  return (
    <Container>
      <form onSubmit={handleLoginFormSubmit} >
        <span>
          Username:
          <LoginTextInput
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)} />
        </span>
        <span>
          Password:
          <LoginTextInput
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)} />
        </span>
        <LoginButton type="submit">Login</LoginButton>
      </form>
    </Container>
  );
};

export default Login;