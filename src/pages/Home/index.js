import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import BooksList from '../../components/booksList';
import { getBooks } from '../../services/api';

const img = {uri: 'https://images5.alphacoders.com/131/1316176.jpeg'};


export default function Home({navigation}) {
const [vtBooks, setVtBooks] = useState([]);
const [ntBooks, setNtBooks] = useState([]);

const fetchDataBooks = async () => {
  try {
    const requestBooks = await getBooks();
    const books = requestBooks.data;
    const vtBooksMap = books.filter(book => book.testament == 'VT');
    const ntBooksMap = books.filter(book => book.testament == 'NT');
    setVtBooks(vtBooksMap);
    setNtBooks(ntBooksMap);
  } catch (error) {
    console.error(error)
  }
}

  useEffect(() => {
      fetchDataBooks();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageHead} source={img} resizeMode='cover' imageStyle={{width: '100%', borderRadius: 15, filter: 'brightness(0.5)'}}>
        <View style={styles.greeting}>
        <Text style={{fontWeight: '200', fontSize: 16, paddingStart: 16, color: '#fff'}} >Olá</Text>
          <Text style={{fontWeight: '100', fontSize: 10, paddingStart: 16, color: '#fff'}} >Quarta-Feira, 07 de Junho</Text>
        </View>
      </ImageBackground>
      <View style={styles.styleVerseDay}>
            <Text style={styles.title}>Verso do Dia</Text>
            <Text>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content
            </Text>
            <Text style={styles.source}>
              Salmos 35: 10
            </Text>
            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
               <Text style={styles.keepReading}>Continuar Lendo</Text>
            </TouchableOpacity>
      </View>

      <View style={styles.testamentList}>
        <Text style={styles.title}>Velho Testamento</Text>
        <BooksList books={vtBooks} navigation={navigation}/> 
      </View>

      <View style={styles.testamentList}>
        <Text style={styles.title}>Novo Testamento</Text>
        <BooksList  books={ntBooks} newT={true} navigation={navigation}/> 
      </View>

    </View>
  )
}