import { StyleSheet, View, Dimensions, Pressable, TextInput } from 'react-native'
import React from 'react'
import SearchIcon from '../../assets/images/Mainpage/SearchIcon.svg'
import Camera from '../../assets/images/Mainpage/Camera.svg'
import Microphone from '../../assets/images/Mainpage/Microphone.svg'

const screenWidth = Dimensions.get('window').width

const Searchbar = () => {
  return (
    <Pressable style={styles.SearchBar}>
      <View style={styles.SearchBarInput}>
        <SearchIcon style={{ width: 20, height: 20 }} />
        <TextInput
          placeholder="Search for Products"
          style={{ flex: 1, fontWeight: 'normal', fontFamily: 'Nunito-Medium' }}
          placeholderTextColor={'#7C7E7E'}
        />
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Camera style={{ width: 20, height: 20 }} />
          <Microphone width={20} height={20} />
        </View> */}
      </View>
    </Pressable>
  )
}

export default Searchbar

const styles = StyleSheet.create({
  SearchBar: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
    width: screenWidth,
  },
  SearchBarInput: {
    borderColor: '#CBCDCD',
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    height: 52,
    gap: 8,
    width: screenWidth - 40,

  },
})