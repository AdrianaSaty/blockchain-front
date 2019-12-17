const axios = require('axios');

async function getMatches(matchday) {
  try {
    const matches =  await axios.get(`${process.env.REACT_APP_BLOCKCHAIN_LOGIN_API}/games/matchday-games?matchday=${matchday}`);
    return matches.data;
  } catch (error) {
    console.log(error);
  }
} 

module.exports = {
  getMatches,
}