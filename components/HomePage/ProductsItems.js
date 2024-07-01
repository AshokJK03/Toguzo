import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

const ProductsItems = () => {
  let [fontsLoaded] = useFonts({
    'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <View>
      <Text style={{fontFamily:'Nunito-Bold'}}>ProductsItems</Text>
    </View>
  )
}

export default ProductsItems

const styles = StyleSheet.create({})