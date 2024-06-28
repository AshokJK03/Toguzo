import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlusIcon from "../../assets/images/Morepage/PlusIcon.svg";
import NoResult from "../../assets/images/Mainpage/NoResult.svg";
import AddNewAddress from "../../components/Morepage/address/AddNewAddress";
import { useNavigation } from "@react-navigation/native";

const Addresses = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable style={styles.Top} onPress={() => navigation.navigate("AddNewAddress")} >
        <PlusIcon />
        <Text style={{ fontWeight: 700, color: "#347B72" }}>New Address</Text>
      </Pressable>
      <NoResult
        width={292}
        height={196}
        style={{
          alignItems: "center",
          marginTop: 100,
          margin: 33,
        }}
      />
      <View style={{ marginTop: 16, alignItems: "center" }}>
        <View >
          <Text
            style={{ fontFamily: "Nunito-Bold", fontSize: 20, fontWeight: 700 }}
          >
            Save Your Addresses Now
          </Text>
        </View>
        <View >
          <Text
            style={{
              fontFamily: "Nunito-Medium",
              fontSize: 13,
              fontWeight: 500,
              color: "#7C7E7E",
            }}
          >
            Add your addresses to enjoy faster checkout
          </Text>
        </View> 
      </View>
    </View>
  );
};

export default Addresses;

const styles = StyleSheet.create({
  Top: {
    flexDirection: "row",
    gap: 8,
    padding: 20,
    backgroundColor: "white",
    marginTop: 8,
    height: 58,
    alignItems:'center'
  },
  TextStyle: {
    fontFamily: "Nunito-Bold",
    fontSize: 14,
  },
});
