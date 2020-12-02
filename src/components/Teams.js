import React from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { movePlayerToTeam } from '../reducers/playerReducer';
import { nameSorter } from '../utils/sorters';

import { ColumnContainer, Column, ColumnTitle, ColumnDeleteButton } from './styled/lib';
import PlayersList from './PlayersList';

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
    <ColumnContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable key='noTeam' droppableId='noTeam'>
          {(provided, snapshot) => (
            <Column
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : 'white' }}>
              <div>
                <ColumnTitle>Unassigned</ColumnTitle>
              </div>
              <PlayersList players={playersWithoutTeam} />
              <span
                style={{
                  display: 'none'
                }}
              >{provided.placeholder}
              </span>
            </Column>
          )}
        </Droppable>
        {
          teams && teams.map(team =>
            <Droppable key={team.id} droppableId={team.id}>
              {(provided, snapshot) => (
                <Column
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : 'white' }}>
                  <div style={{ display: 'flex' }}>
                    <ColumnTitle>{team.name}</ColumnTitle>
                    <ColumnDeleteButton onClick={deleteTeam}>Delete</ColumnDeleteButton>
                  </div>
                  <PlayersList players={players.filter(player => player.team === team.id).sort(nameSorter)} />
                  <span
                    style={{
                      display: 'none'
                    }}
                  >{provided.placeholder}
                  </span>
                </Column>
              )}
            </Droppable>)
        }
      </DragDropContext>
    </ColumnContainer>
  );
};

export default Teams;
