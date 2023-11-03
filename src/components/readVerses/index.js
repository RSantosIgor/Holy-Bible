import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import ItemList from '../itemList';

export default function ReadVerses({chapter, showNumbers = true}) {

  return (
    <View style={styles.container}>
                <FlatList
                style={[styles.marginVertical]}
                data={chapter.verses}
                keyExtractor={({ number }) => number}
                renderItem={({ item, index }) => {
                    return (
                        <ItemList item={item} showNumber={showNumbers} style={{with: '100%'}}/>
                    )
                }}
            />
    </View>
  )
}