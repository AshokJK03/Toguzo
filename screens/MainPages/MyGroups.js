import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyGroupsComp1 from "../../components/MyGroupsPage/MyGroupsComp1";
import MyGroupsC2 from "../../components/MyGroupsPage/MyGroupsC2";

const MyGroups = () => {
  return (
    <View style={{justifyContent:'center'}}>
      <View>
        <MyGroupsComp1 />
      </View>
      <View>
        <MyGroupsC2 />
      </View>
    </View>
  );
};

export default MyGroups;

const styles = StyleSheet.create({});
