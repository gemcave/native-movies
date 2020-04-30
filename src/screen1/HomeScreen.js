/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Header, ImageCard, SearchBar } from '../components/uikit/';
import { View, ScrollView, StyleSheet } from 'react-native';
import { STARGATE_DETAILS } from '../../routes';
import { WHITE, BLUE } from '../../constants';

const moviesUrl = 'http://api.tvmaze.com/search/shows?q=stargate';

const HomeScreen: props => React$Node = props => {
  const [title, _] = useState('Star gate');
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');
  const [visibleSearchBar, setVisibleSearchBar] = useState(false);
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

  const _onChangeText = text => {
    setTerm(text);
  };

  return (
    <View>
      {visibleSearchBar ? (
        <SearchBar
          colorRight={'#fff'}
          iconRight="magnify"
          placeholder="Search"
          onChangeText={_onChangeText}
          value={term}
          onPressRight={() => setVisibleSearchBar(false)}
          onBlur={() => setVisibleSearchBar(false)}
        />
      ) : (
        <Header
          title={title}
          headerColor={BLUE}
          colorRight={'#fff'}
          iconRight="magnify"
          onPressRight={() => setVisibleSearchBar(true)}
          // iconLeft="ios-menu"
          leftColor={WHITE}
        />
      )}
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
