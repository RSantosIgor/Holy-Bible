import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api/'

const client = axios.create({
  baseURL: baseURL,
  timeout: 5000
});

const get = async (url) => {
  const uri = encodeURI(url);
  return await client.get(uri);
}

const getQuery = async (resource, params = [], isQuery = false) => {
  const param = isQuery ? '?' + params.join ('&'): params.join(',');
  const url = `${resource}/${param}`
  return get(url);
}

const getCharacterByName = async ({ name = '' }) => {
  return getQuery('character', [`name=${name}`], true);
}

const getCharacterById = async (ids) => {
  return getQuery('character', ids);
}

const getEpisodesById = async (ids) => {
  return getQuery('episode', ids);
}

const getLocationById = async (ids) => {
  return getQuery('location', ids);
}

export {getCharacterByName, getCharacterById, getEpisodesById, getLocationById}