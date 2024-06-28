import { View, Text, Image,SafeAreaView,TouchableOpacity, Pressable,ScrollView,StyleSheet,TextInput} from 'react-native'
import React, { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import { useFonts } from 'expo-font'
import SearchIcon from "../../assets/images/Mainpage/SearchIcon.svg"
import DownButton from "../../assets/images/Morepage/downArrow.svg"

const FAQItem = ({title,subTitle}) => {
	{/**fonts */}
	let [fontsLoaded] = useFonts({
		'Nunito-SemiBold': require("../../assets/fonts/Nunito-SemiBold.ttf"),
		'Nunito-Medium': require("../../assets/fonts/Nunito-Medium.ttf"),
		'Nunito-Regular': require("../../assets/fonts/Nunito-Regular.ttf"),
		'Nunito-Bold' : require("../../assets/fonts/Nunito-Bold.ttf"),
		'Nunito-ExtraBold' : require("../../assets/fonts/Nunito-ExtraBold.ttf")
	})
	const [isCollapsed,setIsCollapsed] = useState(true);

	return(
		<View style={styles.itemContainer}>
			<View style={styles.itemHeader}>
				<TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
					<Text style={styles.content}>{title}</Text>
				</TouchableOpacity>
				<DownButton style={{paddingVertical:20,}} />
			</View>
			<Collapsible collapsed={isCollapsed}>
				<View style={styles.itemContent}>
					<Text style={styles.subContent}>{subTitle}</Text>
				</View>
			</Collapsible>
		</View>
	);
};

const SignUpAndLogin = () => {
	return(
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					{/** search bar start */}
					<Pressable style={styles.SearchBar}>
						<View style={styles.SearchBarInput}>
							<SearchIcon style={{ width: 20, height: 20 }} />
								<TextInput
									placeholder="Type your question here"
									style={{ flex: 1, fontWeight: 'normal', fontFamily: 'Nunito-Medium' }}
									placeholderTextColor={'#7C7E7E'}
								/>
								<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}></View>
						</View>
					</Pressable>
					{/** search bar end */}
					<View style={styles.contentCont}>
						<Text style={styles.header}>Sign Up and Login</Text>
						<Text style={styles.subHeader}>Sign-Up Process:</Text>
						<FAQItem title="How do I create an account on the app?" subTitle={"Toguzo is an innovative group e-commerce mobile app that allows users to leverage the power of collective buying. Users can create or join groups, enjoy discounts on bulk orders, and make purchases together"}>
							{/* Add content for this item */}
							
						</FAQItem>
						<FAQItem title="Can I sign up using social media accounts?" subTitle={"Toguzo is an innovative group e-commerce mobile app that allows users to leverage the power of collective buying. Users can create or join groups, enjoy discounts on bulk orders, and make purchases together"}>
							{/* Add content for this item */}
							
						</FAQItem>
						<FAQItem title="What information is needed for the sign-up process?" subTitle={"Toguzo is an innovative group e-commerce mobile app that allows users to leverage the power of collective buying. Users can create or join groups, enjoy discounts on bulk orders, and make purchases together"}>
							{/* Add content for this item */}
							
						</FAQItem>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
		
	
}



const styles = StyleSheet.create({


container:{
	backgroundColor: "#FEFEFE",
},
contentCont:{
    
    backgroundColor: '#fff',
    flex: 1,
  },

backGround: {
  backgroundColor:"#FEFEFE"
},
SearchBar: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
	marginTop:24,
	marginBottom:24,
  },
SearchBarInput: {
    borderColor: '#CBCDCD',
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    height: 52,
    gap: 12,
    margin: 20,

  },
  	signupBox:{
		flexDirection: "row",
		display:"flex",
		backgroundColor:"#F2F3F3",
		paddingHorizontal:16,
		paddingTop:8,
		width:350,
		borderRadius:8,	
  },
  titleText: {
	fontSize:20,
	fontFamily:"Nunito-ExtraBold",
	paddingHorizontal:20,
	paddingBottom:20
  },

  subTitleText: {
	fontSize:16,
	fontStyle: "normal",
	paddingHorizontal:20
  },

  /** starts */
  contentCont: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
	marginBottom:20,
    
  },
  subHeader: {
    fontSize: 16,
	marginBottom:8
    
  },
  itemContainer: {
    marginBottom: 10,
	
  },
  itemHeader: {
	display: "flex",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#F2F3F3',
	borderRadius:8,
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContent: {
	backgroundColor: "#F9F9F9",
    padding: 16,
	marginTop:4,
	borderRadius:8,
  },
  subContent:{
	color: "#7C7E7E",
	fontSize:16,
  }


});

export default SignUpAndLogin

// npm install react-native-collapsible
// npm install react-native-elements




