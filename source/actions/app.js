import axios from 'axios';
import { FETCH_ALL_DATA } from '../constants/app';

const ROGIN_URL = 'http://nuwaco-training.haroob.com/api/method/login';
const dataFetch = data => ({
  type: FETCH_ALL_DATA,
  data,
});

export const fetchDataAll = (data) => (async dispatch => {
 await fetch(ROGIN_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log(response)
      dispatch(dataFetch(response));
    })
    .catch((error) => {
      console.log(error)
    });
  }
);
