import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center',
    margin: 10,
    textTransform: 'uppercase',
  },
  viewStyle: {
    backgroundColor: '#30d0fe',
    height: 116,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
});

export default Header;
