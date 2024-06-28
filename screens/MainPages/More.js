import { View, Text, Image,SafeAreaView, Pressable,ScrollView,StyleSheet} from "react-native"
import React from 'react'
import { useFonts } from 'expo-font'
import BellIcon from "../../assets/images/Mainpage/BellIcon.svg"
import BookIcon from "../../assets/images/Morepage/book.svg"
import RightArrow from "../../assets/images/Morepage/rightarrow.svg"
import PencilIcon from "../../assets/images/Morepage/pencil.svg"
import Iicon from "../../assets/images/Morepage/iIcon.svg"
import { useNavigation } from '@react-navigation/native';
import Profile from '../../components/Morepage/Profile'


const More = () => {
	const navigation = useNavigation();
  	let [fontsLoaded] = useFonts({
		'Nunito-SemiBold': require("../../assets/fonts/Nunito-SemiBold.ttf"),
		'Nunito-Medium': require("../../assets/fonts/Nunito-Medium.ttf"),
		'Nunito-Regular': require("../../assets/fonts/Nunito-Regular.ttf"),
		'Nunito-Bold' : require("../../assets/fonts/Nunito-Bold.ttf")
	
	  }) 
  return (
    <>  
      <ScrollView style={styles.backGround}>
		
			<SafeAreaView>
				<View style={styles.topSection}>
					
						<Text style={{fontSize: 20,fontWeight: 600,fontFamily: 'Nunito-Bold',marginTop:8,marginBottom:8}} >More</Text>
						<BellIcon style={{width:48,height:48,marginTop:5,marginRight:8}}/>
					
				</View>

				{/**login button */}
				<View style={styles.logBtn}>
					<Text style={{fontSize:16,fontWeight:600}}>Login to get exclusive offers</Text>
					<Pressable
					style={{
						backgroundColor: '#347B72',
						borderRadius: 10,
						padding: 12,
						height:48,
						alignItems: 'center',
						marginTop: 10
					}}
					>
					<Text style={{ color: 'white', fontWeight: 600 }}>Login</Text>
					</Pressable>
				</View>

				<Profile/>

				{/**support container */}
				<Text style={{fontSize:20,fontWeight:600,backgroundColor:"#fff",paddingHorizontal:20,paddingVertical:16}}>Support</Text>
				<View style={styles.supportContainer}>
					<Pressable  onPress={() => navigation.navigate("FAQs")} style={styles.supportSections}>
						<View  style={styles.FAQs}>
							<BookIcon style={{width:24,height:24,marginRight:16}} />
							<Text style={{fontSize:16, fontWeight:600,marginTop:5}}>FAQs</Text>
						</View>
						<View>
							<Pressable><RightArrow  /></Pressable>
						</View>
					</Pressable>
				</View>
				<View style={styles.supportContainer}>
					<View style={styles.supportSections}>
						<View style={styles.FAQs}>
							<Iicon style={{width:24,height:24,marginRight:16,marginLeft:10}} />
							<Text style={{fontSize:16, fontWeight:600,marginTop:5,}}>About us</Text>
						</View>
						<View>
							<Pressable><RightArrow/></Pressable>
						</View>
					</View>
				</View>
				<View style={styles.supportContainer}>
					<View style={styles.supportSections}>
						<View style={styles.FAQs}>
							<PencilIcon style={{width:24,height:24,marginRight:16,marginLeft:10}} />
							<Text style={{fontSize:16, fontWeight:600,marginTop:5,}}>Give us feedback</Text>
						</View>
						<View>
							<Pressable><RightArrow/></Pressable>
						</View>
					</View>
				</View>

				
				{/**legal */}
				<Text style={{fontSize:20,fontWeight:600,backgroundColor:"#fff",paddingHorizontal:20,paddingVertical:16}}>Legal</Text>
				<View style={styles.supportContainer}>
					<View style={styles.supportSections}>
						<View style={styles.FAQs}>
							<BookIcon style={{width:24,height:24,marginRight:16}} />
							<Text style={{fontSize:16, fontWeight:600,marginTop:5}}>Terms of use</Text>
						</View>
						<View>
							<Pressable><RightArrow/></Pressable>						
						</View>
					</View>
				</View>
				<View style={styles.lastContainer}>
					<View style={styles.lastSections}>
						<View style={styles.FAQs}>
							<BookIcon style={{width:24,height:24,marginRight:16}} />
							<Text style={{fontSize:16, fontWeight:600,marginTop:5}}>Privacy policy</Text>
						</View>
						<View>
							<Pressable><RightArrow/></Pressable>
						</View>
					</View>
				</View>
				
				
			</SafeAreaView>
    	</ScrollView>
    </>
  )
}

export default More

const styles = StyleSheet.create({
  backGround : {
		flex: 1,
		backgroundColor: '#F2F3F3',

	},
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	topSection: {
		backgroundColor: "#fff",
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 8,
		marginTop: 20
	},
	logBtn: {
		backgroundColor: "#fff",
		paddingHorizontal:20,
		paddingVertical: 24,
		marginBottom: 8,
	},
	supportContainer: {
		backgroundColor: "#fff",
		paddingVertical:8,
		paddingHorizontal:16,
	},
	supportSections: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 1,
 		borderBottomColor:"#DDDDDD",
		paddingBottom:8

	},
	FAQs :{
		flexDirection: "row",
		alignItems: "center"
	},
	lastContainer:{
		backgroundColor: "#fff",
		paddingVertical:8,
		paddingHorizontal:16,
	},
	lastSections:{
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		
	},
})

// marginTop:10,
// 		paddingTop: 8,
// 		paddingRight: 12,
// 		paddingBottom: 8,
// 		paddingLeft: 16,
// 		flexDirection: "row",
// 		justifyContent: "space-between",
// 		borderBottomWidth: 2,
// 		borderBottomColor:"#DDDDDD"



				
