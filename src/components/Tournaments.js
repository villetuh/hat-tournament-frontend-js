import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PageTitle, SecondaryButton } from './styled/lib';

const Container = styled.div`
  margin-top: 30px;
`;

const TournamentItem = styled.div`
  margin: 6px 0px;
  padding: 8px 14px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.main};
  text-decoration: none;
`;


const Tournaments = () => {
  const tournaments = useSelector(state => state.tournaments);

  return (
    <div>
      <PageTitle>Tournaments</PageTitle>
      <Link to='/tournaments/add'><SecondaryButton>New tournament</SecondaryButton></Link>
      <Container>
        {
          tournaments
            .map(tournament =>
              <TournamentItem key={tournament.id}>
                <StyledLink to={`/tournaments/${tournament.id}`}>{tournament.name}</StyledLink>
              </TournamentItem>)
        }
      </Container>
    </div>
  );
};

export default Tournaments;
