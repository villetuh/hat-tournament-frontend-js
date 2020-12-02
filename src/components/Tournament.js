import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createPlayer, deletePlayer, initializePlayers } from '../reducers/playerReducer';
import { createPlayerPool, deletePlayerPool, initializePlayerPools } from '../reducers/playerPoolReducer';
import { createTeam, deleteTeam, initializeTeams, setPlayersToTeam } from '../reducers/teamReducer';
import { deleteTournament } from '../reducers/tournamentReducer';

import generateTeams from '../utils/teamGenerator';

import { PageTitle, SecondaryTitle, PrimaryButton, SecondaryButton } from './styled/lib';

import CreatePlayer from './CreatePlayer';
import Players from './Players';

import CreatePlayerPool from './CreatePlayerPool';
import PlayerPools from './PlayerPools';

import CreateTeam from './CreateTeam';
import Teams from './Teams';

const Tournament = () => {
  const tournamentId = useParams().id;

  const dispatch = useDispatch();
  const tournament = useSelector(state => state.tournaments.find(tournament => tournament.id === tournamentId));
  const players = useSelector(state => state.players);
  const playerPools = useSelector(state => state.playerPools);
  const teams = useSelector(state => state.teams);

  useEffect(() => {
    if (tournament) {
      dispatch(initializePlayers(tournament));
      dispatch(initializePlayerPools(tournament));
      dispatch(initializeTeams(tournament));
    }
  }, [tournament]);

  const handleDeleteTournament = (tournament) => {
    dispatch(deleteTournament(tournament));
  };

  const handleCreatePlayer = (player) => {
    dispatch(createPlayer(tournament, player));
  };

  const handleDeletePlayer = (player) => {
    dispatch(deletePlayer(tournament, player));
  };

  const handleCreatePlayerPool = (playerPool) => {
    dispatch(createPlayerPool(tournament, playerPool));
  };

  const handleDeletePlayerPool = (playerPool) => {
    dispatch(deletePlayerPool(tournament, playerPool));
  };

  const handleCreateTeam = (team) => {
    dispatch(createTeam(tournament, team));
  };

  const handleDeleteTeam = (team) => {
    dispatch(deleteTeam(tournament, team));
  };

  const handleGenerateTeams = () => {
    const generatedTeams = generateTeams(playerPools, teams.length);

    for (var i = 0; i < teams.length; i++) {
      dispatch(setPlayersToTeam(tournament, teams[i], players.filter(player => generatedTeams[i].includes(player.id))));
    }
  };

  return (
    <div>
      { tournament &&
        <div className='tournamentPage'>
          <PageTitle>{tournament.name}</PageTitle>
          <SecondaryButton onClick={() => handleDeleteTournament(tournament)}>Delete</SecondaryButton>
          <SecondaryTitle>Players</SecondaryTitle>
          <CreatePlayer createPlayer={handleCreatePlayer} tournamentLink={`/tournaments/${tournament.id}`} />
          { players &&
            <Players players={players} deletePlayer={handleDeletePlayer} />
          }
          <SecondaryTitle>PlayerPools</SecondaryTitle>
          <CreatePlayerPool createPlayerPool={handleCreatePlayerPool} tournamentLink={`/tournaments/${tournament.id}`} />
          { playerPools &&
            <PlayerPools tournament={tournament} playerPools={playerPools} players={players} deletePlayerPool={handleDeletePlayerPool} />
          }
          <SecondaryTitle>Teams</SecondaryTitle>
          <CreateTeam createTeam={handleCreateTeam} tournamentLink={`/tournaments/${tournament.id}`} />
          <PrimaryButton onClick={handleGenerateTeams}>Generate teams</PrimaryButton>
          { teams &&
            <Teams tournament={tournament} teams={teams} players={players} deleteTeam={handleDeleteTeam} />
          }
        </div>
      }
    </div>
  );
};

export default Tournament;
