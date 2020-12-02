import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 1em 4em;
  background: ${props => props.theme.colors.background};
`;

export const Page = styled.div`
  padding: 1em 1em;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.main.fontFamily};
`;
