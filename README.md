# Team Stats

Team Stats is a JavaScript project that allows you to manage player information and game results for your sports team. With this program, you can keep track of your players' details and record game outcomes effortlessly.

## Table of Contents

- [Overview](#overview)
- [How to Use](#how-to-use)
- [Features](#features)
- [Example Usage](#example-usage)

## Overview

The Team Stats project is designed to help sports teams organize and maintain essential player and game data. It provides a user-friendly interface to add new players and record game results. This information can be easily accessed and displayed as needed.

## How to Use

To use Team Stats, follow these simple steps:

1. Clone or download the project to your local machine.

2. Open the project directory in your code editor.

3. Modify the `team` object to add your team's players and game results using the provided methods:
   - `addPlayer(newFirstName, newLastName, newAge)` to add a new player.
   - `addGame(newOpponent, newTeamPoints, newOpponentPoints)` to add a new game result.

4. Use the `console.log()` statements to display player information and game results in the console.

5. Customize and extend the project to fit your team's needs.

## Features

- Add and manage player information.
- Record and display game results.
- Easily extendable for additional features.
- Simple and user-friendly interface.

## Example Usage

Here's an example of how to use Team Stats:

```javascript
const team = {
  // ... (paste your 'team' object here)
};

// Add a new player
team.addPlayer("Luan", "Madson", 23);

// Record a new game result
team.addGame("Palmeiras", 2, 0);

// Display player information and game results
console.log("Players:");
console.log(team.players);

console.log("Games:");
console.log(team.games);
