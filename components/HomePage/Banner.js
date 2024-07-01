import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import bannerImage from '../../assets/images/Homepage/SliderBanners/bannerImage.jpeg';

const Banner = () => {
  const listImage = [
    bannerImage,
    bannerImage,
    bannerImage,
    bannerImage,
  ];

  return (
    <>
      <View style={styles.sliderContainer}>
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={2000}
          images={listImage}
          customSlide={({ index, item }) => (
            <View key={index} style={styles.customSlide}>
              <Image source={item} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttonsContainer}>
              {listImage.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => move(index)}
                  style={[
                    styles.dot,
                    position === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  customSlide: {
    width: Dimensions.get('window').width,
    height: 210,
    bottom: 10,
    backgroundColor: '#F2F3F3',

  },
  customImage: {
    width: '100%',
    height: 188,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: '#E5E6E6', // Inactive dot color
  },
  activeDot: {
    backgroundColor: '#191A1A', // Active dot color
    width: 8,
    height: 8,
  },
});

export default Banner;
