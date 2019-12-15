const axios = require('axios');

// async function currentMatchday() {
//   const response = await axios.get(apiUrl, { headers: { 'X-Auth-Token': '39bdb2d1264e45d99b7cef9897f17968' } });
//   return response.data.currentSeason.currentMatchday;
// }

async function getMatches(matchday, user) {
  try {
    const matches =  await axios.get(`${process.env.REACT_APP_BLOCKCHAIN_LOGIN_API}/games/matchday-games`, {
      params: {
        matchday,
        token: user.token,
      }
    });
    console.log(matches);
  } catch (error) {
    console.log(error);
  }
} 

module.exports = {
  getMatches,
}