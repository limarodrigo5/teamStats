const team = {
    _players: [
      { firstName: "Diego", lastName: "Tardelli", age: 29 },
      { firstName: "Guilherme", lastName: "Gusmão", age: 25 },
      { firstName: "Jesús", lastName: "Dátolo", age: 30 },
    ],
    _games: [
      { opponent: "Cruzeiro", teamPoints: "2", opponentPoints: "0" },
      { opponent: "Flamengo", teamPoints: "4", opponentPoints: "1" },
      { opponent: "Corinthians", teamPoints: "4", opponentPoints: "1" },
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game);
    },
  };
  
  team.addPlayer("Luan", "Madson", 23);
  team.addGame("Palmeiras", 2, 0);
  
  console.log(team.players);
  console.log(team.games);
  