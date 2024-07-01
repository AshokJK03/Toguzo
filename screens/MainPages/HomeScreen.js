import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { BottomModal, SlideAnimation, ModalContent, ModalPortal } from 'react-native-modals'
import Microphone from '../../assets/images/Mainpage/Microphone.svg'
import Wishlist from '../../assets/images/Mainpage/Wishlist.svg'
import BellIcon from '../../assets/images/Mainpage/BellIcon.svg'
import SearchIcon from '../../assets/images/Mainpage/SearchIcon.svg'
import Camera from '../../assets/images/Mainpage/Camera.svg'
import UserIcon from '../../assets/images/Mainpage/UserIcon.svg'
import Stroke from '../../assets/images/Mainpage/Stroke.svg'
import Logo from '../../assets/images/Mainpage/Logo.svg'
import CancelIcon from '../../assets/images/Homepage/ModalScreen/CancelIcon.svg'
import Phone from '../../assets/images/Homepage/ModalScreen/Phone.svg'
import Products from '../../components/HomePage/Products'
import { useNavigation } from '@react-navigation/native';
import BrandCar from '../../components/HomePage/BrandCar';
import Banner from '../../components/HomePage/Banner';
import Promotedproducts from '../../components/HomePage/Promotedproducts';
import ProductsItems from '../../components/HomePage/ProductsItems'
import FilterSection from '../../components/HomePage/FilterSection'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

const screenWidth = Dimensions.get('window').width

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    'Nunito-SemiBold': require('../../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Medium': require('../../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),

  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.TopBorder}>
            <Logo width={35} height={35} style={{ margin: 20 }} />
            <Pressable style={styles.TopNotify}>
              <Wishlist onPress={() => navigation.navigate("Wishlist")} size={35} color="#4B4E4E" />
              <BellIcon onPress={() => navigation.navigate("Notifications")} size={35} color="#4B4E4E" />
            </Pressable>
          </View>
          <View style={{ backgroundColor: '#F2F3F3', }}>
            <Pressable style={styles.TopLog} onPress={() => setModalVisible(!modalVisible)}>
              <UserIcon size={20} color="#00CCBB" />
              <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Nunito-SemiBold' }}>
                <Text style={{ color: '#3D8F84' }}> Login </Text> to get exclusive offers
              </Text>
              <Stroke size={20} />
            </Pressable>
          </View>
          <Pressable style={styles.SearchBar}>
            <View style={styles.SearchBarInput}>
              <SearchIcon style={{ width: 20, height: 20 }} />
              <TextInput
                placeholder="Search for Products"
                style={{ flex: 1, fontWeight: 'normal', fontFamily: 'Nunito-Medium' }}
                placeholderTextColor={'#7C7E7E'}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Camera style={{ width: 20, height: 20 }} />
                <Microphone width={20} height={20} />
              </View>
            </View>
          </Pressable>
          <Text style={{
            borderColor: '#F2F3F3',
            height: 1,
            borderWidth: 3,
            backgroundColor: '#F2F3F3'
          }} />
          <Products />
          <Text style={{
            borderColor: '#F2F3F3',
            height: 1,
            borderWidth: 3,
            backgroundColor: '#F2F3F3'
          }} />
          <BrandCar />
          <Text style={{
            borderColor: '#F2F3F3',
            height: 1,
            borderWidth: 3,
            backgroundColor: '#F2F3F3'
          }} />
          <Banner />
          <Promotedproducts />
          <Text style={{
            borderColor: '#F2F3F3',
            height: 1,
            borderWidth: 3,
            backgroundColor: '#F2F3F3'
          }} />
          <FilterSection />
          <ProductsItems />
          <Text>Loading..</Text>
        </ScrollView>
      </SafeAreaView>
      <ModalPortal />
      <BottomModal onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => {
          setModalVisible(!modalVisible)
        }}>
        <ModalContent style={{ width: "100%", height: 386 }}>
          <View style={{ height: 48, alignItems: 'center', flexDirection: 'row', }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 5, flex: 1, height: 48 }}>
              <View style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}>
                <Logo width={34} height={34} />
              </View>
              <Text style={{ fontWeight: 600, fontSize: 20, color: '#212121', fontFamily: 'Nunito-SemiBold' }}>Toguzo</Text>
            </View>
            <View style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}>
              <CancelIcon width={24} onPress={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 600, height: 50, margin: 10, fontFamily: 'Nunito-SemiBold' }}>Welcome to Toguzo, Login or Signup for exclusive offers</Text>
          </View>
          <View style={{ margin: 10, gap: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: 600, color: '#344054', fontFamily: 'Nunito-SemiBold' }}>Phone Number</Text>
            <View style={styles.PhoneBar}>
              <Phone style={{ width: 20, height: 20 }} />
              <TextInput
                placeholder="Enter Your Number"
                style={{ flex: 1, fontWeight: 'normal', fontFamily: 'Nunito-Regular' }}
                placeholderTextColor={'#7C7E7E'}
              />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
              <Text style={{ fontSize: 12, fontWeight: '600', fontFamily: 'Nunito-Medium' }}> By continuing, I agree to the </Text>
              <View style={{ marginRight: 5 }}>
                <Text style={{ color: '#347B72', fontSize: 12, fontWeight: '600', fontFamily: 'Nunito-Medium' }}>Terms of use</Text>
              </View>
              <Text style={{ fontSize: 12 }}>&</Text>
              <View style={{ marginLeft: 5 }}>
                <Text style={{ color: '#347B72', fontSize: 12, fontWeight: '600', fontFamily: 'Nunito-Medium' }}>Privacy Policy</Text>
              </View>
            </View>
          </View>
          <View style={styles.ButtonTop}>
            <Pressable
              style={{
                backgroundColor: '#347B72',
                borderRadius: 10,
                padding: 12,
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate("OTPScreen");
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ color: 'white', fontWeight: 600, fontFamily: 'Nunito-SemiBold' }}>Continue</Text>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  TopBorder: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 64,
    gap: 10,
  },
  TopLog: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginLeft: 20,
    gap: 5
  },
  SearchBar: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
    
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
    gap: 12,
    width: screenWidth - 40,

  },
  TopNotify: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    gap: 20
  },
  PhoneBar: {
    borderColor: '#CBCDCD',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    height: 52,
    gap: 12,
  },
  ButtonTop: {
    justifyContent: 'center',
    margin: 10,
    flex: 1
  },
});  
