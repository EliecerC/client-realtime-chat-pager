import { fetchApi } from '../helpers';

// TO DO: env variables
const API_KEY = '3ORjPA19xVmFkz3FEQybtxhR7eDmZTPa';

/**
 * returns search results of query from giphy api.
 * Go to: https://developers.giphy.com/docs/api/endpoint#search
 *
 * @param {string} query
 * @param {Object} options
 * @returns {Object}
 */
export function searchGif(query, options) {
  return fetchApi({
    url: 'https://api.giphy.com/v1/gifs/search',
    queryParams: {
      api_key: API_KEY,
      q: query,
      ...options
    }
  }).catch(error => {
    console.log(error);
    console.log(error.stack);
    throw error;
  });
}
