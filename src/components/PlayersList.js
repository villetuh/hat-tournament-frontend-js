import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { ColumnItem } from './styled/lib';

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
              <ColumnItem
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getStyle(provided.draggableProps.style, snapshot)}
              >
                {player.name}
              </ColumnItem>
            }
          </Draggable>
        </div>)
      }
    </div>
  );
};

export default PlayersList;
