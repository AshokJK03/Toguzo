import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/Mainpage/Logo.svg'
import VerifiedCheck from '../../assets/images/Mainpage/VerifiedCheck.svg'
import RefreshLogo from '../../assets/images/Mainpage/RefreshLogo.svg'
import PriceTag from '../../assets/images/Mainpage/PriceTag.svg'

const screenWidth = Dimensions.get('window').width
const BrandCar = () => {

  return (
    <View style={{ marginTop: 8, height: 122 }}>
      <Image
        source={require('../../assets/images/Mainpage/Car.gif')}
        style={styles.image}
      />
      <Logo width={25} style={styles.Logocar} />
      <View style={{ flexDirection: 'row', height: 30, marginTop: 20, width: 339, justifyContent: 'center', margin: 20, paddingEnd: 10, }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          width: 97,
        }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5 }}>
            <View style={styles.BrandAssured}>
              <PriceTag width={16} />
            </View>
            <Text style={{ fontSize: 9, fontWeight: 600, padding: 0, width: 75, fontFamily: "Nunito-Bold", }}>Group buy for lowest price</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          right: 12,
          width: 106
        }} >
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5 }}>
            <View style={styles.BrandAssured}>
              <VerifiedCheck width={16} />
            </View>
            <Text style={{ fontSize: 9, fontWeight: 600, padding: 0, width: 85, fontFamily: "Nunito-Bold" }}>Quality assured products</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          gap: 5,
          width: 96
        }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5 }}>
            <View style={styles.BrandAssured}>
              <RefreshLogo width={16} />
            </View>
            <Text style={{ fontSize: 9, fontWeight: 600, width: 75, fontFamily: "Nunito-Bold" }}>Easy Returns & Refund</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default BrandCar

const styles = StyleSheet.create({
  BrandAssured: {
    zIndex: 10,
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#3D8F84',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BrandTop: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    paddingStart: 20,
    paddingEnd: 20,
    justifyContent: 'center',
    borderWidth: 1

  },
  image: {
    width: screenWidth,
    height: 127,
    resizeMode: 'contain',
    position: 'absolute',
    //right:52
    //left: -(screenWidth * 0.20),
  },
  Logocar: {
    position: 'absolute',
    bottom: 20,
    right: 195
    //right: screenWidth - 208
  },

})
