import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import NotificationFiles from '../../../assets/images/ErrorsFiles/NotificationFiles.svg'

const Notifications = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.Imagecontainer}>
        <NotificationFiles
          style={styles.Container}
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center',marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 700, fontFamily: "Nunito-Bold"}}>No Notification</Text>
      </View>
      <View style={{marginTop: 16, height:24, justifyContent:'center', alignItems:'center'
      }}>
        <Text style={{ fontSize: 16, color: '#7C7E7E', fontWeight: 500, fontFamily: "Nunito-Medium" }}>There is no notification to show right now.</Text>
      </View>
      <View style={{ justifyContent: 'flex-end', margin: 20, flex: 1 }}>
        <Pressable
          style={{
            backgroundColor: '#347B72',
            borderRadius: 10,
            padding: 12,
            height:48,
            alignItems: 'center',
            marginBottom: 24,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Text style={{ color: 'white', fontWeight: 600, fontFamily: "Nunito-SemiBold", fontSize:16 }}>Continue Shopping</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  Container: {
    height: 280,
    width: 280,
  },
  Imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
})