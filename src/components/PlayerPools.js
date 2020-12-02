import React from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { movePlayerToPlayerPool } from '../reducers/playerReducer';
import { nameSorter } from '../utils/sorters';

import { ColumnContainer, Column, ColumnTitle, ColumnDeleteButton } from './styled/lib';
import PlayersList from './PlayersList';


const PlayerPools = ({ tournament, playerPools, players, deletePlayerPool }) => {
  const dispatch = useDispatch();
  const playersWithoutPool = players.filter(player => player.playerPool === null || player.playerPool === undefined)
    .sort(nameSorter);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }

    const destinationPlayerPool = destination.droppableId === 'noPlayerPool'
      ? null
      : playerPools.find(playerPool => playerPool.id === destination.droppableId);

    dispatch(movePlayerToPlayerPool(tournament, players.find(player => player.id === draggableId), destinationPlayerPool));
  };

  return (
    <ColumnContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable key='noPlayerPool' droppableId='noPlayerPool'>
          {(provided, snapshot) => (
            <Column
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : 'white' }}>
              <div>
                <ColumnTitle>Unassigned</ColumnTitle>
              </div>
              <PlayersList players={playersWithoutPool} />
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
          playerPools && playerPools.map(playerPool =>
            <Droppable key={playerPool.id} droppableId={playerPool.id}>
              {(provided, snapshot) => (
                <Column
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : 'white' }}>
                  <div style={{ display: 'flex' }}>
                    <ColumnTitle>{playerPool.name}</ColumnTitle>
                    <ColumnDeleteButton onClick={deletePlayerPool}>Delete</ColumnDeleteButton>
                  </div>
                  <PlayersList players={players.filter(player => player.playerPool === playerPool.id).sort(nameSorter)} />
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

export default PlayerPools;
