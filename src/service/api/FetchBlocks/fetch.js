import axios from 'axios';

export function fetch(params) {
  return axios.get('https://blotting.herokuapp.com/api/blocks', params)
    .then(({ data }) => data)
    .catch((error) => {
      console.log('Error', error);
      throw error;
    });
}
