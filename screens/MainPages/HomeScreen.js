import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet, Pressable, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { BottomModal, SlideAnimation, ModalContent, ModalPortal } from 'react-native-modals'
import UserIcon from '../../assets/images/Mainpage/UserIcon.svg'
import Stroke from '../../assets/images/Mainpage/Stroke.svg'
import Logo from '../../assets/images/Mainpage/Logo.svg'
import CancelIcon from '../../assets/images/Homepage/ModalScreen/CancelIcon.svg'
import LocationTag from '../../assets/images/Mainpage/LocationTag.svg'
import Phone from '../../assets/images/Homepage/ModalScreen/Phone.svg'
import Products from '../../components/HomePage/Products'
import { useNavigation } from '@react-navigation/native';
import BrandCar from '../../components/HomePage/BrandCar';
// import Banner from '../../components/HomePage/Banner';
import Promotedproducts from '../../components/HomePage/Promotedproducts';
import FilterSection from '../../components/HomePage/FilterSection'
import Searchbar from '../../components/HomePage/Searchbar'
import Statusbar from '../../components/HomePage/Statusbar'
import { UserContext } from '../../Context/UserContext'

const HomeScreen = () => {

  const userState = useContext(UserContext)
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('')
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)

  const handlePhoneNumber = (text) => {
    setModalText(text)
    setIsButtonEnabled(text.length === 10)
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* Statusbar */}

            <Statusbar />

            {/* Statusbar */}

            {userState.user ? (
              <>
                <View style={{ backgroundColor: '#F2F3F3', height: 40, justifyContent: "center" }}>
                  <Pressable style={styles.TopLog}>
                    <Pressable style={styles.TopLogs} onPress={() => setModalVisible(true)}>
                      <UserIcon size={20} />
                      <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Nunito-SemiBold' }}>
                        <Text style={{ color: '#3D8F84' }}> Login </Text> to get exclusive offers
                      </Text>
                    </Pressable>
                    <Stroke size={20} />
                  </Pressable>
                </View>

                <Searchbar />

                <Text style={{
                  borderColor: '#F2F3F3',
                  height: 1,
                  borderWidth: 3,
                  backgroundColor: '#F2F3F3'
                }} />
              </>
            ) : (
              <>

                <Searchbar />

                <View style={{ backgroundColor: '#F2F3F3', height: 40, justifyContent: "center" }}>
                  <Pressable style={styles.TopLog}>
                    <Pressable style={styles.TopLogs}>
                      <LocationTag size={20} />
                      <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Nunito-SemiBold', color: '#347B72' }}>
                        Add delivery location
                      </Text>
                    </Pressable>
                    <Stroke size={20} />
                  </Pressable>
                </View>
              </>
            )}
          </View>

          {/* Products */}

          <Products />

          {/* Products */}

          <Text style={{
            borderColor: '#F2F3F3',
            height: 1,
            borderWidth: 3,
            backgroundColor: '#F2F3F3'
          }} />

          {/* Slider */}

          <BrandCar />

          {/* Slider */}

          <Text style={{
            borderColor: '#F2F3F3',
            height: 1,
            borderWidth: 3,
            backgroundColor: '#F2F3F3'
          }} />

          {/* Banner */}

          {/* <Banner /> */}

          {/* Banner */}


          <Text style={{
            borderColor: '#F2F3F3',
            height: 1,
            borderWidth: 3,
            backgroundColor: '#F2F3F3'
          }} />
          
          {/* Promoted Products */}

          <Promotedproducts />

          {/* Promoted Products */}

          <Text style={{
            borderColor: '#F2F3F3',
            height: 1,
            borderWidth: 3,
            backgroundColor: '#F2F3F3'
          }} />
          <FilterSection />
          <Text>Loading..</Text>
        </ScrollView>
      </SafeAreaView >
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
        }}
      >
        <ModalContent style={{ width: "100%", height: 380 }}>
          <View style={{ height: 48, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 5, flex: 1, height: 48 }}>
              <View style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}>
                <Logo width={34} height={34} />
              </View>
              <View style={{justifyContent:'center', alignItems: 'center'}}>
              <Text style={{ fontWeight: 600, fontSize: 24, color: '#212121', fontFamily: 'Nunito-SemiBold' }}>Toguzo</Text>
              </View>
            </View>
            <View style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center', }}>
              <CancelIcon width={24} onPress={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 600, height: 60, fontFamily: 'Nunito-SemiBold' }}>Welcome to Toguzo, Login or Signup for exclusive offers</Text>
          </View>
          <View style={{ marginTop: 24, gap: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: 600, color: '#344054', fontFamily: 'Nunito-SemiBold' }}>Phone Number</Text>
            <View style={styles.PhoneBar}>
              <Phone style={{ width: 20, height: 20 }} />
              <TextInput
                placeholder="Enter Your Number"
                style={{ flex: 1, fontWeight: 'normal', fontFamily: 'Nunito-Regular' }}
                placeholderTextColor={'#7C7E7E'}
                keyboardType="numeric"
                selectionColor={'#7C7E7E'}
                maxLength={10}
                onChangeText={handlePhoneNumber}
              />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
              <Text style={{ fontSize: 12, fontWeight: '500', fontFamily: 'Nunito-Medium' }}> By continuing, I agree to the </Text>
              <View style={{ marginRight: 5 }}>
                <Text style={{ color: '#347B72', fontSize: 12, fontWeight: '700', fontFamily: 'Nunito-Bold' }}>Terms of use</Text>
              </View>
              <Text style={{ fontSize: 12 }}>&</Text>
              <View style={{ marginLeft: 5 }}>
                <Text style={{ color: '#347B72', fontSize: 12, fontWeight: '700', fontFamily: 'Nunito-Bold' }}>Privacy Policy</Text>
              </View>
            </View>
          </View>
          <View style={styles.ButtonTop}>
            <Pressable
              style={{
                backgroundColor: isButtonEnabled ? '#347B72' : '#F2F3F3',
                borderRadius: 10,
                padding: 12,
                height: 48,
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate("OTPScreen");
                setModalVisible(!modalVisible);
              }}
              disabled={!isButtonEnabled}
            >
              <Text style={{ color: isButtonEnabled ? "#F8F9F9" : '#B1B4B4', fontWeight: 600, fontFamily: "Nunito-SemiBold", fontSize: 16 }}>Continue</Text>
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
    paddingTop: 36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  TopLog: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    gap: 6
  },
  TopLogs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  PhoneBar: {
    borderColor: '#CBCDCD',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    height: 52,
    gap: 8,
  },
  ButtonTop: {
    justifyContent: 'center',
    marginTop: 24,
    flex: 1
  },
});
