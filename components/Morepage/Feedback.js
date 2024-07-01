import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeedbackSuccessScreen from '../../components/Morepage/FeedbackSuccessScreen';

const Home = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    navigation.navigate('FeedbackSuccessScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Give your thoughts</Text>
      <Text style={styles.paragraph}>
        We appreciate you taking a moment to share your thoughts, concerns, and gratitude with us.
        Although, we are unable to address each case personally, we will forward it to the teams
        that are trying to improve Toguzo for all users.
        {'\n\n'}
        Please contact our support staff or visit our Help Centre if you have any queries or need
        help with a specific issue.
      </Text>
      <Text style={styles.sectionHeading}>Give feedback</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Type your feedback here..."
        multiline={true}
        numberOfLines={6}
      />
      <Text style={styles.sectionHeading}>Still need help?</Text>
      <Text style={styles.paragraph}>
        Have queries? Please get in touch and we will be happy to help you.
      </Text>
      <Pressable style={[styles.button, text ? styles.green : styles.grey]}
        onPress={handleSubmit}
        disabled={!text}
      >
        <Text style={styles.buttonText}>Submit</Text></Pressable>
        
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  heading: {
    fontFamily: 'Nunito-Bold',
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 50.4,
    marginBottom: 16,
  },
  paragraph: {
    color: '#212121',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 16,
  },
  sectionHeading: {
    color: '#212121',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    marginBottom: 8,
  },
  textBox: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CBCDCD',
    backgroundColor: '#FEFEFE',
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  button: {
    marginTop:90,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#6200EE',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Nunito-Regular',
  },
  grey: {
    backgroundColor: '#F2F3F3',
  },
  green: {
    backgroundColor: '#347B72',
  },
});
