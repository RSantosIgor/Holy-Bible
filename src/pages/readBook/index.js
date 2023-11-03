import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import ReadVerses from '../../components/readVerses';
import { getBook, getChapter } from '../../services/api';
import { VersionContext } from '../../contexts/version';

export default function ReadBook({navigation, route}) {
    const bookAbbrev = route.params.book;
    const [book, setBook] = useState({});
    const [numberCh, setNumberCh] = useState(1);
    const [chapter, setChapter] = useState([]);
    const versionContext = useContext(VersionContext);
    const version = versionContext.version;

    const fetchDataBook = async () => {
        try {
          const requestBook = await getBook(bookAbbrev);
          const bookData = requestBook.data;
          setBook(bookData);
          getCh(numberCh);
        } catch (error) {
          console.error(error);
        }
      }
    
    const getCh= async () => {
        const chapterRequest = await getChapter(bookAbbrev, numberCh, version);
        const chapterData = chapterRequest.data;
        setChapter(chapterData);
    }

    useEffect(() => {
        fetchDataBook();
    }, [])

    useEffect(() => {
        getCh(numberCh);
    }, [numberCh])

  return (
    <View style={styles.container}>
      <Text style={styles.bookName}>{book.name} ({version})</Text>
      <Text style={styles.cap}>Capítulo {numberCh}</Text>
      <ScrollView  style={styles.scrollRead} showsVerticalScrollIndicator={false}>
            <ReadVerses chapter={chapter}/>
            <View style={styles.containerButtonsGuide}>
                { numberCh > 1 && 
                    <TouchableOpacity style={styles.button} onPress={() => setNumberCh(numberCh - 1)}>
                        <Text style={styles.textButton}>Anterior</Text>
                    </TouchableOpacity>
                }

                { numberCh < book.chapters &&
                    <TouchableOpacity style={styles.button} onPress={() => setNumberCh(numberCh + 1)}>
                        <Text style={styles.textButton}>Próximo</Text>
                    </TouchableOpacity>
                }
            </View>
      </ScrollView>
    </View>
  )
}