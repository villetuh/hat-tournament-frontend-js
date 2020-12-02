import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 1em 4em;
  background: ${props => props.theme.colors.background};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Page = styled.div`
  padding: 1em 1em;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.main.fontFamily};
`;

export const AppTitle = styled.h1`
  font-family: ${props => props.theme.fonts.title.fontFamily};
  font-weight: ${props => props.theme.fonts.title.fontWeight};
  margin: 0px;
`;

export const PageTitle = styled.h2`
  font-family: ${props => props.theme.fonts.title.fontFamily};
  font-weight: ${props => props.theme.fonts.title.fontWeight};
`;

export const SecondaryTitle = styled.h3`
  font-family: ${props => props.theme.fonts.title.fontFamily};
  font-weight: ${props => props.theme.fonts.title.fontWeight};
`;

export const PrimaryButton = styled.button`
  background: ${props => props.theme.colors.primaryButtonBackground};
  color: ${props => props.theme.colors.primaryButton};
  margin: 0px 0px 5px 0px;
  padding: 6px 12px;
  font-size: medium;
  border-style: solid;
  border-color: ${props => props.theme.colors.primaryButtonBackground};
  border-radius: 4px;
  border-width: 1px;
`;

export const SecondaryButton = styled.button`
  background: ${props => props.theme.colors.secondaryButtonBackground};
  color: ${props => props.theme.colors.secondaryButton};
  margin: 0px 0px 5px 0px;
  padding: 6px 12px;
  font-size: medium;
  border-style: solid;
  border-color: ${props => props.theme.colors.secondaryButton};
  border-radius: 4px;
  border-width: 1px;
`;

export const LoginButton = styled.button`
  background: ${props => props.theme.colors.primaryButtonBackground};
  color: ${props => props.theme.colors.primaryButton};
  margin: 0px 0px 0px 10px;
  padding: 6px 12px;
  font-size: x-small;
  border-style: solid;
  border-color: ${props => props.theme.colors.primaryButtonBackground};
  border-radius: 4px;
  border-width: 1px;
`;

export const LogoutButton = styled.button`
  background: ${props => props.theme.colors.secondaryButtonBackground};
  color: ${props => props.theme.colors.secondaryButton};
  margin: 0px 0px 0px 10px;
  padding: 6px 12px;
  font-size: x-small;
  border-style: solid;
  border-color: ${props => props.theme.colors.secondaryButton};
  border-radius: 4px;
  border-width: 1px;
`;

export const ColumnDeleteButton = styled.button`
  background: ${props => props.theme.colors.deleteButtonBackground};
  color: ${props => props.theme.colors.deleteButton};
  margin: 0px 10px 0px auto;
  padding: 2px 4px;
  font-size: x-small;
  border-style: solid;
  border-color: ${props => props.theme.colors.deleteButton};
  border-radius: 4px;
  border-width: 1px;
`;

export const TextInput = styled.input`
  margin: 0px 4px;
  padding: 6px 8px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
`;

export const Column = styled.div`
  margin: 0px 10px;
  padding: 4px 10px;
  width: 12em;
`;

export const ColumnTitle = styled.h4`
  margin: 4px 2px;
`;

export const ColumnItem = styled.div`
  margin: 4px 2px;
  padding: 4px 6px;
  border: 1px solid;
  border-radius: 2px;
  background: ${props => props.theme.colors.background};
`;