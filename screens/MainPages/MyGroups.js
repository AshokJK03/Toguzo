import { StyleSheet, Text, View, Pressable, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";
import MyGroupsC2 from "../../components/MyGroupsPage/MyGroupsC2";
import SearchIcon from "../../assets/images/Mainpage/SearchIcon.svg";
import Filter from "../../assets/images/MyGroupsPage/Filter.svg";
import CancelIcon from "../../assets/images/Homepage/ModalScreen/CancelIcon.svg"
import { BottomModal, SlideAnimation, ModalContent, ModalPortal } from 'react-native-modals'
import StatusFilter from "../../components/MyGroupsPage/Modal/StatusFilter";

const MyGroups = () => {

  const [modalfilter, setModalfilter] = useState(false)

  return (
    <>
      <SafeAreaView>
        <View style={{ padding: 8 }}>
          <View style={{ backgroundColor: "#ffff", height: 68, right: 8, width: 360 }}>
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
                right: 20,
                borderBlockColor: "#CBCDCD",
                alignItems: "center",
                justifyContent: "center"
              }}>
              <Pressable>
                <Filter onPress={() => setModalfilterMyGroups(!modalfilterMyGroups)} />
              </Pressable>
            </Pressable>
          </View>
        </View>
        <View>
          <MyGroupsC2 />
        </View>
      </SafeAreaView>
      {/* <ModalPortal />
      <BottomModal onBackdropPress={() => setModalfilter(!modalfilter)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalfilter(!modalfilter)}
        visible={modalfilter}
        onTouchOutside={() => {
          setModalfilter(!modalfilter)
        }}>
        <ModalContent style={{ width: "100%", height: 540 }}>
          <View style={{ height: 48, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, height: 48 }}>
              <Text style={{ fontWeight: 700, fontSize: 20, color: '#212121', fontFamily: 'Nunito-Bold' }}>Filter Groups</Text>
            </View>
            <View style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}>
              <CancelIcon width={25} onPress={() => setModalfilter(!modalfilter)} />
            </View>
          </View>
          <View style={{ height: 368, marginEnd: 10 }}>
            <View style={{ borderWidth: 2, height: 224, width: 175 }}>
              <Text style={{ color: "#212121", fontWeight: 700, fontSize: 16, fontFamily: 'Nunito-Bold' }}>Status</Text>
              <View style={{ marginTop: 16, height: 184, width: 170, borderWidth: 1 }}>
                <StatusFilter />
              </View>
            </View>
          </View>
        </ModalContent>
      </BottomModal> */}
      
    </>
  );
};

export default MyGroups;

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
