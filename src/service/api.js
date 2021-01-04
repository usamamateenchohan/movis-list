import axios from 'axios';

const baseURL = "http://www.omdbapi.com/";

const api = {
  get: (options) => async dispatch => {

    const [success, failure] = options.types;
    const promise = (resolve, reject) => {

      return axios({
        method: 'GET',
        url: `${baseURL}${options.url}`
      })
        .then(res => {
          resolve(dispatch({
            type: success,
            payload: res.data
          }))
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err
          }))
        })
    }

    return new Promise(promise);
  }
}

export { api };
