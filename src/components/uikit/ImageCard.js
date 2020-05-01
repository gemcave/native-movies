import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { w } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10,
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});

const ImageCard = ({ data, onPress }) => {
  const { h1, cover, container, sub } = styles;
  const { image, name } = data;
  const img =
    image === null
      ? 'https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png'
      : image.medium;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{ uri: img }} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};
// export {ImageCard};
export default ImageCard;
