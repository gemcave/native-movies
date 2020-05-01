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
import { connect } from 'react-redux';
import { searchChanged, getMovies } from '../actions/';
import { STARGATE_DETAILS } from '../../routes';
import { WHITE, BLUE } from '../../constants';

const moviesUrl = 'http://api.tvmaze.com/search/shows?q=stargate';

const HomeScreen: props => React$Node = props => {
  const [title, _] = useState('Star gate');
  const [movies, setMovies] = useState([]);
  const [visibleSearchBar, setVisibleSearchBar] = useState(false);
  const { container } = styles;
  const { navigation, movie, data, searchChanged, getMovies } = props;

  // useEffect(() => {
  //   const fetchMovies = async url => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setMovies(data);
  //     } catch (e) {
  //       throw e;
  //     }
  //   };

  //   fetchMovies(moviesUrl);
  // }, []);

  const _onChangeText = text => {
    searchChanged(text);
    getMovies(text);
  };

  console.log(props);
  return (
    <View>
      {visibleSearchBar ? (
        <SearchBar
          colorRight={'#fff'}
          iconRight="magnify"
          placeholder="Search"
          onChangeText={_onChangeText}
          value={movie}
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
          {data.map(item => (
            <ImageCard
              key={item.show.id}
              data={item.show}
              onPress={() =>
                navigation.navigate(STARGATE_DETAILS, {
                  show: item.show,
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

const mapStateToProps = state => {
  return {
    movie: state.search.movie,
    data: state.search.data,
  };
};
export default connect(
  mapStateToProps,
  { searchChanged, getMovies },
)(HomeScreen);
