import React from 'react';

const Teams = ({ teams, deleteTeam }) => {

  return (
    <div>
      {
        teams && teams
          .map(team =>
            <div key={team.id}>
              <div>{team.name}<button onClick={() => deleteTeam(team)}>Delete</button></div>
            </div>)
      }
    </div>
  );
};

export default Teams;
