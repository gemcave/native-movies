import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Header, ImageBigCard } from '../components/uikit';
import { WHITE, BLUE, w } from '../../constants';
import { STARGATE_HOME } from '../../routes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: WHITE,
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10,
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15,
  },
});

class DelailsScreen extends Component {
  componentWillUnmount() {
    const { onGoBack } = this.props.route.params;
    onGoBack && onGoBack('Hello from children');
  }

  render() {
    const { show } = this.props.route.params;
    const { image, name, summary } = show;
    const { navigation } = this.props;
    const data = { image, name };
    const { container, sub, h1, h2 } = styles;
    return (
      <View style={container}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          headerColor={BLUE}
          leftColor={WHITE}
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary && summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DelailsScreen;
