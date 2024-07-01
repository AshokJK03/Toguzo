import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyGroups from '../../assets/images/NavigationTab/GroupIconInactive.svg'
import UserHeart from "../../assets/images/Mainpage/UserHeart.svg"
import Trends from "../../assets/images/Mainpage/Trends.svg"

const FilterSection = () => {
  return (
    <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <Pressable style={styles.container}>
        <View style={styles.contains}>
          <MyGroups  />
          <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: "Nunito-SemiBold" }}>Group Buy</Text>
        </View>
        <View style={styles.contains}>
          <UserHeart />
          <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: "Nunito-SemiBold" }}>Product for you</Text>
        </View>
        <View style={styles.contains}>
          <Trends />
          <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: "Nunito-SemiBold" }}>Trends</Text>
        </View>
        <View style={styles.contains}>
          <UserHeart />
          <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: "Nunito-SemiBold" }}>Most Bought</Text>
        </View>
        <View style={styles.contains}>
          <UserHeart />
          <Text >Top rated</Text>
        </View>
      </Pressable>
    </ScrollView>
  )
}

export default FilterSection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    padding: 5,
    borderWidth: 1
  },
  contains: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "#CBCDCD",
    alignItems: "center",
    gap: 5
  },
})