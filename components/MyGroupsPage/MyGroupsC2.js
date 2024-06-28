import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import ArrowPR from "../../assets/images/MyGroupsPage/ArrowPR.svg";

const MyGroupsC2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View
              style={{
                borderRadius: 20,
                padding: 2,
                backgroundColor: "#0014c8",
                width: 32,
                height: 32,
              }}
            />
            <View
              style={{
                borderRadius: 20,
                padding: 2,
                zIndex: 20,
                backgroundColor: "rgb(31, 189, 189)",
                width: 32,
                height: 32,
                right:20
              }}
            />
            <View>
            <Text style={styles.headerText}>
              Group <Text style={styles.boldText}>almost filled</Text>
            </Text>
             <Text style={styles.updateText}>Last update On Mon, 16 Oct</Text>
             </View>
          </View>
          <View style={styles.headerRight}>
            <View style={{borderRadius: 50, padding: 3, height: 5, width: 5, backgroundColor: "#000000"}}></View>
            <Text style={styles.timerText}>22:23:12</Text>
          </View>
        </View>
        <Text
          style={{
            borderColor: "#F2F3F3",
            height: 1,
            borderWidth: 0,
            backgroundColor: "#F2F3F3",
          }}
        />
        <View style={styles.body}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>Jacket</Text>
            <Text numberOfLines={1} style={styles.productDescription}>
              Ellipse Fashion Women's Winter 
            </Text>
            <Text style={styles.productInfo}>Size: XL | Qty: 1</Text>
          </View>
          <View style={{width: 40, height: 40, justifyContent: "center", marginLeft: 16, left:15}}>
            <ArrowPR style={styles.abc}/>
          </View>
        </View>
        <Text
          style={{
            borderColor: "#F2F3F3",
            height: 1,
            borderWidth: 0,
            backgroundColor: "#F2F3F3",
          }}
        />
        <View style={styles.footer}>
          <ProgressBar
            progress={0.58}
            width={279}
            height={8}
            color="#FB6514"
            unfilledColor="#E6E0E9"
            borderWidth={0}
            borderRadius={5}
          />
          <View style={{ height: 24, width: 59, justifyContent: "center" }}>
            <Text style={styles.progressText}>
              <Text style={{ fontWeight: 700 }}>122</Text>/200
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          borderColor: "#F2F3F3",
          height: 1,
          borderWidth: 3,
          backgroundColor: "#F2F3F3",
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff",
    width: 400,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: 238,
    height: 44,
    
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
  headerText: {
    fontSize: 14,
    color: "#000",
  },
  boldText: {
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:'#FFBE00',
    borderRadius:20,
    width:85,
    height:26,
    justifyContent: "center",
    right:40

  },
  timerText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#000",
  },
  updateText: {
    fontSize: 12,
    color: "#999",
    marginVertical: 5,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  productImage: {
    width: 68,
    height: 70,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
   justifyContent:'center',
    width: 218,
    height: 70,
    marginLeft: 16
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
  productInfo: {
    fontSize: 12,
    color: "#999",
  },
  arrowIcon: {
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  progressText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#000",
  },
  abc:{
    right:50
  }
});

export default MyGroupsC2;
