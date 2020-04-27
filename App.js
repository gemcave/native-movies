/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, Fragment } from 'react';
import { Header, ImageCard } from './src/components/uikit/';
import { View, ScrollView, StyleSheet } from 'react-native';

const moviesUrl =
  'https://gitlab.com/gHashTag/react-native-init-data/-/raw/master/db.json';

const App: () => React$Node = () => {
  const [title, _] = useState('Star gate');
  const [movies, setMovies] = useState([]);
  const { container } = styles;

  useEffect(() => {
    const fetchMovies = async url => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      } catch (e) {
        throw e;
      }
    };

    fetchMovies(moviesUrl);
  }, []);
  console.log(movies);
  return (
    <View>
      <Header title={title} />
      <ScrollView>
        <View style={container}>
          {movies.map(movie => (
            <ImageCard key={movie.id} data={movie} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150,
  },
});
export default App;
