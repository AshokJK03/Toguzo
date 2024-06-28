import {
  StyleSheet,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import React from "react";
import SearchIcon from "../../assets/images/Mainpage/SearchIcon.svg";
import Filter from "../../assets/images/MyGroupsPage/Filter.svg";

const MyGroupsComp1 = () => {
  return (
    <SafeAreaView>
      <View style={{padding: 8}}>
      <View style={{backgroundColor: "#ffff", height: 68,right:8,width:400}}>
        <Pressable style={styles.SearchBar}>
          <View style={styles.SearchBarInput}>
            <SearchIcon style={{ width: 20, height: 20 }} />
            <TextInput
              placeholder="Search for Products"
              style={{
                flex: 1,
                fontWeight: "normal",
                fontFamily: "Nunito-Medium",
              }}
              placeholderTextColor={"#7C7E7E"}
            />
          </View>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            padding: 8,
            borderRadius: 10,
            width: 52,
            height: 52,
            borderColor: "#CBCDCD",
            alignSelf: "flex-end",
            bottom: 52,
            right: 65,
            borderBlockColor: "#CBCDCD",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View>
            <Filter />
          </View>
        </Pressable>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    
  },
  SearchBar: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    height: 52,
    width: 282,
    
  },
  SearchBarInput: {
    borderColor: "#CBCDCD",
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    height: 52,
    gap: 12,
    margin: 20,
  },
});

export default MyGroupsComp1;
  