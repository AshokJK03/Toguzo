import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import banner1 from '../../assets/images/Homepage/SliderBanners/banner1.png';

const { width: screenWidth } = Dimensions.get('window');

const Banners = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const listImage = [
    banner1,
    banner1,
    banner1
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banner</Text>
      <Carousel
        data={listImage}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        autoplay
        loop
        autoplayDelay={1000}
        autoplayInterval={3000}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={listImage.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slide: {
    width: screenWidth,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#191A1A', // Active dot color
  },
  inactiveDotStyle: {
    backgroundColor: '#E5E6E6', // Inactive dot color
  },
});

export default Banners;
