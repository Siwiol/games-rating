const BASE_URL = "https://api-code-2.practicum-team.ru/games";
const endpoints = {
    games: `${BASE_URL}/games`
};

const WEIGHT = {
    gameplay: 2,
    design: 1,
    idea: 3,
  };

module.exports = {endpoints, WEIGHT };