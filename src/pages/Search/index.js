import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style';
import { VersionContext } from '../../contexts/version';
import { search } from '../../services/api';
import ReadVerses from '../../components/readVerses';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState(' ');
  const versionContext = useContext(VersionContext);
  const [verses, setVerses] = useState([]);
  const fetchData = async () => {
    const version = versionContext.version;

    try {
      const searchRequest = await search({version, search: searchQuery}); 
      const searchData =  searchRequest.data;
      setVerses(searchData.verses);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquisar</Text>
      <TextInput
        style={[styles.textInput]}
        onChangeText={setSearchQuery}
        value={searchQuery} 
        textAlign={'center'}
      />
      <TouchableOpacity style={[styles.button]} onPress={() => fetchData(searchQuery)}>
          <Text style={[styles.buttonText, {color: '#fff'}]}>Buscar</Text>
      </TouchableOpacity>

      <ReadVerses chapter={verses} showNumbers={false}/>
    </View>
  )
}