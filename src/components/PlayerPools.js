import React from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PlayersList from './PlayersList';

import { movePlayerToPlayerPool } from '../reducers/playerReducer';
import { nameSorter } from '../utils/sorters';

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
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable key='noPlayerPool' droppableId='noPlayerPool'>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <h3>Unassigned</h3>
            <PlayersList players={playersWithoutPool} />
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
        playerPools && playerPools.map(playerPool =>
          <Droppable key={playerPool.id} droppableId={playerPool.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}>
                <h3>{playerPool.name}</h3>
                <button onClick={deletePlayerPool}>Delete</button>
                <PlayersList players={players.filter(player => player.playerPool === playerPool.id).sort(nameSorter)} />
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

export default PlayerPools;
