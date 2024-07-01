import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { OtpInput } from 'react-native-otp-entry'

export default function LoginScreen() {

  const navigation = useNavigation();
  const [otpmodal, setOtpmodal] = useState('')
  const [isButtonEnabled, setIsButtonEnabled] = useState('')

  const handleOtpChange = (text) => {
    setOtpmodal(text)
    setIsButtonEnabled(text.length === 4)
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white", }}>
        <View style={{ margin: 20 }}>
          <View>
            <Text style={{ fontWeight: 600, fontSize: 20, fontFamily: "Nunito-SemiBold" }}>Verify with OTP</Text>
          </View>
          <View style={{ height: 229, marginTop: 24 }}>
            <Text style={{ fontWeight: 500, fontFamily: "Nunito-Medium", fontSize: 16 }}>
              Sent via SMS to
              <Text style={{ fontWeight: 600, fontFamily: "Nunito-SemiBold" }}>
                xxxxxxxx
              </Text>
            </Text>
            <View style={{ height: 45, marginTop: 40, width: 212 }}>
              <OtpInput
                numberOfDigits={4}
                onContentType="oneTimeCode" // for IOS
                importantForAutofill="yes" // for Android
                onTextChange={handleOtpChange}
                focusColor={'#70C2B7'}
                theme={{
                  pinCodeContainerStyle: {
                    backgroundColor: 'white',
                    borderWidth: 1.5,
                    borderColor: '#70C2B7',
                    borderRadius: 5,
                    width: 35,
                    height: 45,

                  }
                }}
              />
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Text
                style={{
                  color: "#7C7E7E",
                  fontWeight: 500,
                  fontFamily: "Nunito-Medium",
                  fontSize: 14,
                  marginTop: 8
                }}>
                Trying to autofill OTP
              </Text>
              <Text
                style={{
                  color: '#7C7E7E',
                  fontWeight: 700,
                  fontFamily: "Nunito-Bold",
                  fontSize: 14,
                  marginTop: 8,
                }}>
                Timer
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Text
                style={{
                  fontWeight: 500,
                  fontFamily: "Nunito-Medium",
                  fontSize: 14,
                  marginTop: 24
                }}>
                Did not receive OTP ?
              </Text>
              <Text
                style={{
                  color: '#347B72',
                  fontWeight: 700,
                  fontFamily: "Nunito-Bold",
                  fontSize: 14,
                  marginTop: 24,
                }} onPress={() => console.log("hi")}>
                Resend
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Text
                style={{
                  fontWeight: 500,
                  fontFamily: "Nunito-Medium",
                  fontSize: 14,
                  marginTop: 16,
                }}>
                Having Issues ?
              </Text>
              <Text
                style={{
                  color: '#347B72',
                  fontWeight: 700,
                  fontFamily: "Nunito-Bold",
                  fontSize: 14,
                  marginTop: 16,
                }} onPress={() => console.log("help")}>
                Get Help
              </Text>
            </View>
          </View>
          <Pressable
            style={{
              backgroundColor: isButtonEnabled ? '#347B72' : '#F2F3F3',
              borderRadius: 10,
              padding: 12,
              height: 48,
              alignItems: 'center',
              marginTop:300,
            }}
            onPress={() => {
              navigation.navigate("AccountCreate");
            }}
            disabled={!isButtonEnabled}
          >
            <Text style={{ color: isButtonEnabled ? "#F8F9F9" : '#B1B4B4', fontWeight: 600, fontFamily: "Nunito-SemiBold", fontSize: 16 }}>Verify Number</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({})