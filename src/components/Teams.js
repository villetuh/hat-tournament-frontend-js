import React from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PlayersList from './PlayersList';

import { movePlayerToTeam } from '../reducers/playerReducer';
import { nameSorter } from '../utils/sorters';

const Teams = ({ tournament, teams, players, deleteTeam }) => {
  const dispatch = useDispatch();
  const playersWithoutTeam = players.filter(player => player.team === null || player.team === undefined)
    .sort(nameSorter);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }

    const destinationTeam = destination.droppableId === 'noTeam'
      ? null
      : teams.find(team => team.id === destination.droppableId);

    dispatch(movePlayerToTeam(tournament, players.find(player => player.id === draggableId), destinationTeam));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable key='noTeam' droppableId='noTeam'>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <h3>Unassigned</h3>
            <PlayersList players={playersWithoutTeam} />
            <span
              style={{
                display: 'none'
              }}
            >{provided.placeholder}
            </span>
          </div>
        )}
      </Droppable>
      {
        teams && teams.map(team =>
          <Droppable key={team.id} droppableId={team.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}>
                <h3>{team.name}</h3>
                <button onClick={deleteTeam}>Delete</button>
                <PlayersList players={players.filter(player => player.team === team.id).sort(nameSorter)} />
                <span
                  style={{
                    display: 'none'
                  }}
                >{provided.placeholder}
                </span>
              </div>
            )}
          </Droppable>)
      }
    </DragDropContext>
  );
};

export default Teams;
