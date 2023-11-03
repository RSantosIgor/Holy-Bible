import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome5} from  '@expo/vector-icons';
import styles from './style';

export default function BooksList({books, navigation, newT = false}) {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        setBookList(books);
    }, [books]);

  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            bookList.map(book => {
                
                return (
                    <TouchableOpacity 
                    style={styles.actionButton} 
                    key={book.abbrev.pt}
                    onPress={()=> navigation.navigate('readBook', {book: book.abbrev.pt})}
                    >
                        <View style={styles.areaButton}>
                            { newT &&
                                <FontAwesome5 name='cross' size={26} color={'#282828'}/>
                            }

                            { !newT &&
                                <AntDesign name='book' size={26} color={'#282828'}/>
                            }
                        </View>
                        <Text style={styles.labelButton}>{book.name}</Text>
                    </TouchableOpacity>
                )

            })
        }

    </ScrollView>
  )
}