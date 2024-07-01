import { StyleSheet, Pressable, View } from 'react-native'
import Logo from '../../assets/images/Mainpage/Logo.svg'
import Wishlist from '../../assets/images/Mainpage/Wishlist.svg'
import BellIcon from '../../assets/images/Mainpage/BellIcon.svg'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Statusbar = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.TopBorder}>
      <Logo width={35} height={35} style={{ margin: 20 }} />
      <Pressable style={styles.TopNotify}>
        <View style={styles.TopNotifyIcon}>
          <Wishlist onPress={() => navigation.navigate("Wishlist")} size={35} color="#4B4E4E" />
        </View>
        <View style={styles.TopNotifyIcon}>
          <BellIcon onPress={() => navigation.navigate("Notifications")} size={35} color="#4B4E4E" />
        </View>
      </Pressable>
    </View>
  )
}

export default Statusbar

const styles = StyleSheet.create({
  TopBorder: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 64,
    gap: 10,
  },
  TopNotify: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,

  },
  TopNotifyIcon: {
    alignItems: 'center',
    width: 48,
    height: 48,
    justifyContent: 'center'
  },
})