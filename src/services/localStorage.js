import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    return await Promise.resolve(AsyncStorage.setItem(key, jsonValue));
  } catch (e) {
    return Promise.reject(e);
  }
}

  
const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? Promise.resolve(JSON.parse(jsonValue)) : Promise.resolve(null);
  } catch (e) {
      return Promise.reject(e);
  }
}
  
const saveFavorite = async (key, data) => {
  try {
    const hasFavorite = await favoriteExist(key, data); 
    if (!hasFavorite) {
      const favorites = await getData(key) || [];
      favorites.push(data);
      return setData(key, favorites);
    }
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

const removeFavorite = async (key, data) => {
  try {
    const hasFavorite = await favoriteExist(key, data); 
    if (hasFavorite) {
      const favorites = await getData(key) || [];
      const newF = favorites.filter(f => f.text !== data.text);
      return setData(key, newF);
    }
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

const favoriteExist = async (key, data) => {
  const favorites = await getData(key);
  if (favorites && Array.isArray(favorites)) {
    const has = favorites.filter((f, i) => f.text === data.text).length > 0;
    return Promise.resolve(has);  
  } else {
    Promise.resolve(false);
  }
}
const getIndexFavorite = async (key, data) => {
  const favorites = await getData(key);
  let index;
  for (let i = 0; i < favorites.length; i++) {
    const favorite = favorites[i];
    if(favorite.text == data.text) {
      index = i;
    }
  }
  return index;
}

export { setData, getData, favoriteExist, saveFavorite, removeFavorite }