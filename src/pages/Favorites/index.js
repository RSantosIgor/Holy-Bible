import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import ReadVerses from '../../components/readVerses';
import { getData } from '../../services/localStorage';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  
  const getFavorites = async() => {
    try {
      const f = (await getData('Favorites')) || [];
      setFavorites(f);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Versículos Favoritos</Text>
      <ScrollView  style={styles.scrollRead} showsVerticalScrollIndicator={false}>
            <ReadVerses chapter={{verses: favorites}} showNumbers={false}/>
      </ScrollView>
    </View>
  )
}