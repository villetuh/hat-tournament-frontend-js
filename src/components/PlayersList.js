import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const PlayersList = ({ players }) => {
  function getStyle(style, snapshot) {
    if (!snapshot.isDragging) return {};
    if (!snapshot.isDropAnimating) {
      return style;
    }

    return {
      ...style,
      // cannot be 0, but make it super tiny
      transitionDuration: '0.001s'
    };
  }

  return (
    <div>
      { players.map((player, index) =>
        <div key={player.id}>
          <Draggable draggableId={player.id} index={index}>
            {(provided, snapshot) =>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getStyle(provided.draggableProps.style, snapshot)}
              >
                {player.name}
              </div>
            }
          </Draggable>
        </div>)
      }
    </div>
  );
};

export default PlayersList;
