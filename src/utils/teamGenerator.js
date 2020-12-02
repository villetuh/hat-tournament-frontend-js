const generateTeams = (playerPools, numberOfTeams) => {
  const teams = Array.from(Array(numberOfTeams), () => new Array(0));
  let currentTargetNumberOfPlayers = 1;

  for (var playerPool of playerPools) {
    for (var player of playerPool.players) {
      let teamFound = false;
      while (!teamFound) {
        const teamIndex = getRandomInt(numberOfTeams);
        if (teams[teamIndex].length < currentTargetNumberOfPlayers) {
          teams[teamIndex].push(player);
          teamFound = true;
          currentTargetNumberOfPlayers = Math.min(...teams.map(team => team.length)) + 1;
        }
      }
    }
  }
  return teams;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default generateTeams;
