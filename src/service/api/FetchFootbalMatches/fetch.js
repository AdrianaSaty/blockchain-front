import axios from 'axios';

export function fetch(body) {
  return axios.get('https://api.football-data.org/v2/competitions/CL/matches', {body, headers: { 'X-Auth-Token': '5a851c804e7d4452b8ff35f7a0653465' } } )
    .then(({ data }) => data)
    .catch((error) => {
      console.log('Error', error);
      throw error;
    });
}
