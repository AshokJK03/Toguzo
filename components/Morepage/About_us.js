import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Journey from "../../assets/images/Morepage/Journey.svg";
import Mission from "../../assets/images/Morepage/Mission.svg";
import Team from "../../assets/images/Morepage/Team.svg";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Toguzo</Text>
          <Text style={styles.para}>
            At toguzo, we go beyond the ordinary – we're not just an e-commerce platform; we're a lifestyle. Step into a world where innovation meets style, and every purchase tells a story.
          </Text>
          <Text style={styles.heading}>Our Journey</Text>
          <Journey />
          <Text style={styles.para}>
            Established in 2023, Toguzo was founded with a vision to [mention your mission or goal]. From our humble beginnings to now, we've grown into a destination for [your product category or services].
          </Text>
          <Text style={styles.heading}>Our Mission</Text>
          <Mission />
          <Text style={styles.para}>
            Driven by a mission to [state your mission, e.g., "revolutionize the way people shop online" or "bring quality products to your doorstep with ease"], we are committed to creating a seamless and delightful shopping experience.
          </Text>
          <Text style={styles.heading}>What Makes Us Unique</Text>
          <Text style={styles.subheading}>Curated Collections</Text>
          <Text style={styles.para}>
            Discover handpicked selections that resonate with your unique style and preferences. We believe in offering more than just products; we offer a curated lifestyle.
          </Text>
          <Text style={styles.subheading}>Innovation at Heart</Text>
          <Text style={styles.para}>
            Experience the future of shopping with our innovative features. From augmented reality try-ons to personalized recommendations, we're always one step ahead.
          </Text>
          <Text style={styles.subheading}>Sustainability Matters</Text>
          <Text style={styles.para}>
            We're not just about style; we're about substance. Join us in our commitment to sustainability, [mention specific initiatives, e.g., eco-friendly packaging, supporting fair trade].
          </Text>
          <Text style={styles.heading}>Meet the Team</Text>
          <Text style={styles.para}>
            Behind every success is a team that cares. Get to know the faces driving [Your App Name] forward.
          </Text>
          <Team />
          <Text style={styles.connect}>Connect with Us</Text>
          <Text style={styles.para}>
            Whether you have a question or just want to say hello, we're here for you. Connect with us at [contact email or social media handles].
          </Text>
          <Text style={styles.heading}>Join the [Your App Name] Family</Text>
          <Text style={styles.para}>
            Follow us on [social media platforms] for exclusive offers, behind-the-scenes moments, and a peek into the [Your App Name] lifestyle.
          </Text>
          <View style={styles.divider} />
          <Text style={styles.para}>
            Thank you for being part of our journey. Together, let's redefine the art of shopping!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('../../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Home />;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcome: {
    color: '#212121',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    marginBottom: 16,
  },
  heading: {
    color: '#212121',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    marginBottom: 16,
  },
  subheading: {
    color: '#212121',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 8,
  },
  para: {
    color: '#7C7E7E',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    width: 350,
    marginBottom: 24,
  },
  connect: {
    color: '#212121',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    marginBottom: 16,
    marginTop: 24,
  },
  divider: {
    height: 1,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
  },
});
