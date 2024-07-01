import { StyleSheet, Text, View, Pressable, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import MailIcon from '../../../assets/images/Homepage/ModalScreen/MailIcon.svg'
import MaleIcon from '../../../assets/images/Homepage/ModalScreen/Male Icon.svg'
import FemaleIcon from '../../../assets/images/Homepage/ModalScreen/Female Icon.svg'
import { UserContext } from '../../../Context/UserContext'

const Accountcreate = ({ navigation }) => {
  const userState = useContext(UserContext)
  const [selectgender, setSelectgender] = useState("")
  const [inputText, setInputText] = useState("")
  const [inputemail, setInputEmail] = useState("")
  const filled = inputText && inputemail;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white", }}>
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 600, fontFamily: "Nunito-SemiBold", lineHeight:30 }}>Set up your account</Text>
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontWeight: 600, fontSize: 20, fontFamily: "Nunito-SemiBold", lineHeight:30 }}>Gender</Text>
            <View style={styles.gender}>
              <Pressable style={[styles.maleContain, { borderColor: selectgender === 'Male' ? "#1570EF" : '#CBCDCD' }]} onPress={() => setSelectgender("Male")}>
                < MaleIcon />
                <Text style={{ fontSize: 16, color: selectgender === 'Male' ? "#1570EF" : '#212121', fontWeight: 600, fontFamily: "Nunito-SemiBold", lineHeight:24 }}>Male</Text>
              </Pressable>
              <Pressable style={[styles.femalecontain, { borderColor: selectgender === 'Female' ? "#DD2590" : '#CBCDCD' }]} onPress={() => setSelectgender("Female")}>
                < FemaleIcon />
                <Text style={{ fontSize: 16, color: selectgender === 'Female' ? "#DD2590" : '#212121', fontWeight: 600, fontFamily: "Nunito-SemiBold", lineHeight:24 }}>Female</Text>
              </Pressable>
            </View>
            <View style={{ marginTop: 24 }}>
              <Text style={{ fontSize: 20, color: '#212121', fontWeight: 600, fontFamily: "Nunito-SemiBold", lineHeight:30 }}>What Should We Call You?</Text>
              <View style={styles.NameBar}>
                <TextInput
                  placeholder="Max"
                  style={{ flex: 1, fontWeight: 'normal' }}
                  placeholderTextColor={'#7C7E7E'}
                  onChangeText={text => setInputText(text)}
                />
              </View>
            </View>
            <View style={{ marginTop: 24 }}>
              <Text style={{ fontSize: 20, color: '#212121', fontWeight: 600, fontFamily: "Nunito-SemiBold", lineHeight:30 }}>Email</Text>
              <View style={styles.NameBar}>
                <MailIcon style={{ width: 20, height: 20 }} />
                <TextInput
                  textContentType='emailAddress'
                  placeholder="maxmail@gmail.com"
                  style={{ flex: 1, fontWeight: 'normal' }}
                  placeholderTextColor={'#7C7E7E'}
                  onChangeText={texts => setInputEmail(texts)}
                /></View>
            </View>
          </View>

          <Pressable
            style={{
              backgroundColor: filled ? '#347B72' : '#F2F3F3',
              borderRadius: 10,
              padding: 12,
              height: 48,
              alignItems: 'center',
              marginTop: 240,
            }}
            onPress={() => {
              userState.setUser(() => (UserContext.user))
              navigation.navigate("Main");
            }}
            disabled={!filled}
          >
            <Text style={{ color: filled ? "#F8F9F9" : '#B1B4B4', fontWeight: 600, fontFamily: "Nunito-SemiBold", fontSize: 16 }}>Create Account</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Accountcreate

const styles = StyleSheet.create({
  NameBar: {
    borderColor: '#CBCDCD',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    marginTop: 8,
    height: 52,
    gap: 12
  },
  gender: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 16,
  },
  GenderText: {
    fontWeight: 600, 
    fontSize: 20, 
    fontFamily: "Nunito-SemiBold", 
    lineHeight:30
  },
  maleContain: {
    flexDirection: "row",
    borderWidth: 1,
    width: 167,
    height: 48,
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
    gap: 8
  },
  femalecontain: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    width: 167,
    height: 48,
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
    gap: 8
  }
})