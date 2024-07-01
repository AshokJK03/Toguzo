import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Check from '../../assets/images/Morepage/Check.svg';
import Circle from '../../assets/images/Morepage/Circle.svg';

const { width, height } = Dimensions.get('window');

const FeedbackSuccessScreen = () => {
  const [submitted, setSubmitted] = useState(false);
  const animationValue = useState(new Animated.Value(0))[0];
  const circleAnimation = useState(new Animated.Value(0))[0];
  const opacityValue = useState(new Animated.Value(0))[0];
  const textAnimation = useState(new Animated.Value(0))[0];

  // Load fonts
  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
  });

  useEffect(() => {
    // Simulating automatic submission or any other condition that triggers animation
    startAnimation();
  }, []);

  const startAnimation = () => {
    setSubmitted(true);
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1500, // Green screen duration
      useNativeDriver: false,
    }).start(() => {
      // Fade in animation for check mark and circle
      Animated.parallel([
        Animated.timing(circleAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true, // Using native driver for opacity animation
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true, // Using native driver for opacity animation
        }),
      ]).start(() => {
        // Fade in animation for text
        Animated.timing(textAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true, // Using native driver for opacity animation
        }).start();
      });
    });
  };

  const containerStyle = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#347B72'], // Change color to green on submission
  });

  const animatedStyle = {
    backgroundColor: containerStyle,
    position: 'absolute',
    width: animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, width * 2], // Expand width to move out of the screen
    }),
    height: animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height * 2], // Expand height to move out of the screen
    }),
    left: 0,
    bottom: 0,
    borderTopRightRadius: animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 2036], // Interpolates border radius from 0 to 2036px for the top right corner
    }),
  };

  const checkContainerStyle = {
    opacity: opacityValue,
    transform: [
      {
        scale: opacityValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1], // Scale up from 0.5 to 1
        }),
      },
    ],
    position: 'absolute',
    top: 130, // Adjust top position as needed
    left: (width - 61.667) / 2, // Center horizontally
    zIndex: 2, // Ensure it's above the circle
  };

  const circleContainerStyle = {
    opacity: opacityValue,
    transform: [
      {
        scale: opacityValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1], // Scale up from 0.5 to 1
        }),
      },
    ],
    position: 'absolute',
    top: 100, // Adjust top position as needed
    left: (width - 100) / 2, // Center horizontally
    zIndex: 1, // Ensure it's behind the check mark
  };

  const textContainerStyle = {
    opacity: textAnimation,
    transform: [
      {
        translateY: textAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0], // Slide up from 20px to 0
        }),
      },
    ],
    position: 'absolute',
    top: 300, // Adjust top position as needed
    left: (width - 302) / 2, // Center horizontally
    zIndex: 1, // Ensure it's above other elements
    width: 302,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, animatedStyle]} />
      {submitted && (
        <>
          <Animated.View style={[styles.circleContainer, circleContainerStyle]}>
            <Circle style={styles.circle} />
          </Animated.View>
          <Animated.View style={[styles.checkContainer, checkContainerStyle]}>
            <Check style={styles.check} />
          </Animated.View>
        </>
      )}
      <Animated.View style={[styles.textContainer, textContainerStyle]}>
        <Text style={styles.thankYouText}>
          Thank You For Submitting Your Feedback
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  animatedContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  checkContainer: {
    width: 61.667,
    height: 205,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    width: 40, // Adjust size of Check as needed
    height: 40, // Adjust size of Check as needed
  },
  circleContainer: {
    width: 100,
    height: 260,
    transform: [{ rotate: '-90deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginTop: 15, // Adjust as needed for spacing
  },
  thankYouText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Nunito-Black.ttf',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
  },
});
export default FeedbackSuccessScreen;
