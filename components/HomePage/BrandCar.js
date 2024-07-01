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
        source={require('../../assets/images/Mainpage/Toguzo3Car.gif')}
        style={styles.image}
      />
      <Logo width={25} style={styles.Logocar} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row',  marginTop: 16, alignItems: 'center', width: 339, paddingStart: 10 }}>
          <View style={{
            flexDirection: 'row',
            flex: 1,
            width: 90,
          }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5 }}>
              <View style={styles.BrandAssured}>
                <PriceTag width={16} />
              </View>
              <Text style={{ fontSize: 10, fontWeight: 600, width: 65, fontFamily: "Nunito-Bold", }}>Group buy for lowest price</Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            flex: 1,
            right: 2,
            width: 106
          }} >
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5 }}>
              <View style={styles.BrandAssured}>
                <VerifiedCheck width={16} />
              </View>
              <Text style={{ fontSize: 10, fontWeight: 600, width: 74, fontFamily: "Nunito-Bold" }}>Quality assured products</Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            flex: 1,
            width: 96
          }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5 }}>
              <View style={styles.BrandAssured}>
                <RefreshLogo width={16} />
              </View>
              <Text style={{ fontSize: 10, fontWeight: 600, width: 64, fontFamily: "Nunito-Bold" }}>Easy Returns & Refund</Text>
            </View>
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
  },
  Logocar: {
    position: 'absolute',
    left: screenWidth - 248,
    bottom: 16,
   // right: screenWidth - 208
  },

})
