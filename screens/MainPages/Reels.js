import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import NoResult from "../../assets/images/ErrorsFiles/NoResult.svg"

const Reels = () => {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center", paddingTop: "50%", margin: 20 }}>
        <NoResult />
        <Text style={{fontSize: 24, fontWeight:600, fontFamily: 'Nunito-Bold'}}>Comming Soon!</Text>
      </View>
    </SafeAreaView>
  )
}

export default Reels