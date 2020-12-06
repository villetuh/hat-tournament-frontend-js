import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
`;

export const AppTitle = styled(Link)`
  text-decoration: none;
  font-family: ${props => props.theme.fonts.title.fontFamily};
  font-weight: ${props => props.theme.fonts.title.fontWeight};
  font-size: xx-large;
  margin: 0px 40px 0px 0px;
  color: ${props => props.theme.colors.main};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  font-family: ${props => props.theme.fonts.title.fontFamily};
  font-size: large;
  color: ${props => props.theme.colors.main};
`;

const Navigation = () => {
  const location = useLocation();
  const currentUser = useSelector(state => state.currentUser.user);

  return (
    <Container>
      <AppTitle to='/'>HattyApp</AppTitle>
      { currentUser &&
        <StyledLink to='/tournaments' selected={location.pathname.startsWith('/tournaments')}>Tournaments</StyledLink> }
    </Container>
  );
};

export default Navigation;
