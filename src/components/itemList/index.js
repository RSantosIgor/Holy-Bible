import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import {Entypo} from '@expo/vector-icons';
import styles from './style';
import { favoriteExist, removeFavorite, saveFavorite } from '../../services/localStorage';

export default function ItemList({item, showNumber = true}) {

    const [isFocused, setIsFocused] = useState(false);
    const heart = <Entypo name='heart' size={20} color={'#FF0000'}/>
    const heartOutline = <Entypo name='heart-outlined' size={20} color={'#FF0000'}/>
    const key = 'Favorites';

    const saveFavorites = () => {
        
        if (!isFocused) {
            saveFavorite(key, item)
        } {
            removeFavorite(key, item);
        }
        setIsFocused(!isFocused);
    }
    
    const markFavorite = async () => {
        const exists = await favoriteExist(key, item)
        setIsFocused(exists);
    }

    useEffect(() => {
            markFavorite();
    }, []);


  return (
    <View style={styles.container}>
        <View style={[styles.itemList]}>
            { showNumber &&            
                <Text style={styles.numberVerse}>{item.number}</Text>
            }
            <View style={styles.verseText}>
                <Text>{item.text}</Text>
            </View>
            <TouchableOpacity onPress={() => saveFavorites()}>
                <View style={styles.favorite}>
                    {isFocused ? heart: heartOutline}                                
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}