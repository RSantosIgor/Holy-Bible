import axios from 'axios'
import 'dotenv/config'

const baseURL = 'https://www.abibliadigital.com.br/api/'
const token = process.env.TOKEN_API;
const client = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const get = async (url) => {
  const uri = encodeURI(url);
  return await client.get(uri);
}

const post = async (url, body) => {
  const uri = encodeURI(url);
  return await client.post(uri, body);
}


const getBooks = async () => {
  const url = 'books';
  return get(url);
}

const getBook = async (abbrev) => {
  const url = `books/${abbrev}`;
  return get(url);
}

const getChapter = async (abbrev, chapter, version = 'nvi') => {
  const url = `verses/${version}/${abbrev}/${chapter}`;
  return get(url);
}
const search = async ({version, search}) => {
  const url = `verses/search`;
  return post(url, {version, search});
}

const getVersions = () => {
  const url = `versions`;
  return get(url);
}

export {getBooks, getBook, getChapter, getVersions, search};