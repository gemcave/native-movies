/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Header, ImageCard, SearchBar } from '../components/uikit/';
import { View, ScrollView, StyleSheet } from 'react-native';
import { STARGATE_DETAILS } from '../../routes';
import { WHITE, BLUE } from '../../constants';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const GET_SHOWS = gql`
  query($search: String!) {
    shows(search: $search)
      @rest(type: "Person", path: "search/shows?q={args.search}") {
      show @type(name: "Show") {
        id
        name
        summary
        image @type(name: "Image") {
          medium
          original
        }
      }
    }
  }
`;

const moviesUrl = 'http://api.tvmaze.com/search/shows?q=stargate';

const HomeScreen: props => React$Node = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('StarGate');
  const { data, loading } = useQuery(GET_SHOWS, {
    variables: { search: value },
  });
  const [visible, setVisible] = useState(false);
  // const [visibleSearchBar, setVisibleSearchBar] = useState(false);
  const { container } = styles;

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

  const onScreen = (screen, show) => () => navigation.navigate(screen, show);
  const onPress = i => () => setVisible(i);
  const onSearchChange = text => setValue(text);

  return (
    <View>
      {visible ? (
        <SearchBar
          colorRight={'#fff'}
          iconRight="magnify"
          placeholder="Search"
          onChangeText={onSearchChange}
          onPressRight={onPress(false)}
          onBlur={onPress(false)}
        />
      ) : (
        <Header
          title={value}
          headerColor={BLUE}
          colorRight={'#fff'}
          iconRight="magnify"
          onPressRight={onPress(true)}
          // iconLeft="ios-menu"
          leftColor={WHITE}
        />
      )}
      <ScrollView>
        <View style={container}>
          {!loading &&
            data.shows.map(item => (
              <ImageCard
                key={item.show.id}
                data={item.show}
                onPress={onScreen(STARGATE_DETAILS, { movie: item.show })}
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
