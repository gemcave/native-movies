/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Header, ImageCard } from '../components/uikit/';
import { View, ScrollView, StyleSheet } from 'react-native';
import { STARGATE_DETAILS } from '../../routes';
import { WHITE, BLUE } from '../../constants';

const moviesUrl = 'http://api.tvmaze.com/search/shows?q=stargate';

const HomeScreen: props => React$Node = props => {
  const [title, _] = useState('Star gate');
  const [movies, setMovies] = useState([]);
  const { container } = styles;
  const { navigation } = props;

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

  const onGoBack = someDataFromChildren => {
    console.log('someDataFromChildren', someDataFromChildren) //eslint-disable-line
  };

  return (
    <View>
      <Header
        title={title}
        headerColor={BLUE}
        onPress={() => navigation.openDrawer()}
        // leftIcon="ios-menu"
        leftColor={WHITE}
      />
      <ScrollView>
        <View style={container}>
          {movies.map(movie => (
            <ImageCard
              key={movie.show.id}
              data={movie.show}
              onPress={() =>
                navigation.navigate(STARGATE_DETAILS, {
                  show: movie.show,
                  onGoBack: onGoBack,
                })
              }
            />
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
export default HomeScreen;
