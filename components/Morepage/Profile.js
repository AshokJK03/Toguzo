import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import RightArrow from "../../assets/images/Morepage/rightarrow.svg";
import ShippingIcon from "../../assets/images/Morepage/shippingBox.svg";
import WishListIcon from "../../assets/images/Mainpage/Wishlist.svg";
import CouponsIcon from "../../assets/images/Morepage/couponsIcon.svg";
import HelpCenterIcon from "../../assets/images/Morepage/helpCenterIcon.svg";
import UPIicon from "../../assets/images/Morepage/UPIicon.svg";
import AddressIcon from "../../assets/images/Morepage/adderssIcon.svg";
import SettingIcon from "../../assets/images/Morepage/settingIcon.svg";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        {/**profile section */}
        <View style={styles.profileContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileName}>KV</Text>
            </View>
            <View style={{ paddingVertical: 11, paddingLeft: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>Kayal Vizhi</Text>
              <Text style={{ color: "#7C7E7E", fontSize: 16, fontWeight: 600 }}>
                kayalvizhi321@gmail.com
              </Text>
            </View>
          </View>
          <RightArrow />
        </View>

        {/**order,wishlist,help,coupons section */}
        <View style={styles.OrderWishHelpCouponSection}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <View style={styles.shippingContainer}>
              <View style={{ marginRight: 8 }}>
                <ShippingIcon />
              </View>
              <View>
                <Text
                  style={{ fontSize: 14, fontWeight: 600, fontStyle: "normal" }}
                >
                  Your orders
                </Text>
              </View>
              <RightArrow />
            </View>
            <View style={styles.shippingContainer}>
              <WishListIcon />
              <View>
                <Text
                  style={{ fontSize: 14, fontWeight: 600, fontStyle: "normal" }}
                >
                  Wishlist
                </Text>
              </View>
              <RightArrow />
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 16,
              marginBottom: 8,
            }}
          >
            <View style={styles.shippingContainer}>
              <View style={{ marginRight: 8 }}>
                <CouponsIcon />
              </View>
              <View>
                <Text
                  style={{ fontSize: 14, fontWeight: 600, fontStyle: "normal" }}
                >
                  Coupons
                </Text>
              </View>
              <RightArrow />
            </View>
            <View style={styles.shippingContainer}>
              <HelpCenterIcon />
              <View style={{ marginLeft: 8 }}>
                <Text
                  style={{ fontSize: 14, fontWeight: 600, fontStyle: "normal" }}
                >
                  Help center
                </Text>
              </View>
              <RightArrow />
            </View>
          </View>
        </View>

        {/**SETTINGS SECTION */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            paddingVertical: 16,
          }}
        >
          Settings
        </Text>  

        <Pressable
          style={styles.addrSection}
          onPress={() => navigation.navigate("Addresses")}
        >
          <View style={styles.addrCont}>
            <View style={styles.addr}>
              <AddressIcon
                style={{ padding: 8, marginLeft: 16, marginRight: 8 }}
              />
              <Text style={{ fontSize: 16, fontWeight: 600, marginLeft: 12 }}>
                Addresses
              </Text>
            </View>
            <RightArrow />
          </View>
        </Pressable>

        <View style={styles.supportContainer}>
          <View style={styles.supportSections}>
            <View style={styles.FAQs}>
              <UPIicon
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 16,
                  marginLeft: 10,
                }}
              />
              <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 5 }}>
                UPI and cards
              </Text>
            </View>

            <Pressable>
              <RightArrow style={{ width: 40, height: 40 }} />
            </Pressable>
          </View>
        </View>
        <View style={styles.supportContainer}>
          <View style={styles.supportSections}>
            <View style={styles.FAQs}>
              <SettingIcon
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 16,
                  marginLeft: 10,
                }}
              />
              <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 5 }}>
                Manage notifications & account
              </Text>
            </View>

            <Pressable>
              <RightArrow style={{ width: 40, height: 40 }} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  profileIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    backgroundColor: "#D9D6FE",
    borderRadius: 40,
  },
  profileName: {
    fontSize: 24,
    fontStyle: "normal",
    color: "#6938EF",
  },
  OrderWishHelpCouponSection: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 17,
    marginBottom: 8,
  },
  shippingContainer: {
    display: "flex",
    width: 167,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    alignItems: "center",
  },
  supportContainer: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  supportSections: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    paddingBottom: 8,
  },

  FAQs: {
    flexDirection: "row",
    paddingBottom: 8,
  },
  addrSection: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    padding: 8,
  },
  addrCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    paddingBottom: 8,
  },
  addr: {
    flexDirection: "row",
  },
});
