import { useRef, React } from 'react'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, Text, Animated, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from 'expo-navigation-bar';
import HomeIconActive from '../assets/NavigationTab/HomeIconActive.svg'
import HomeIconInactive from '../assets/NavigationTab/HomeIconInactive.svg'
import ReelsIconActive from '../assets/NavigationTab/ReelsIconActive.svg'
import ReelsIconInactive from '../assets/NavigationTab/ReelsIconInactive.svg'
import MoreIconActive from '../assets/NavigationTab/MoreIconActive.svg'
import MoreIconInactive from '../assets/NavigationTab/MoreIconInactive.svg'
import GroupIconActive from '../assets/NavigationTab/GroupIconActive.svg'
import GroupsIconInactive from '../assets/NavigationTab/GroupIconInactive.svg'
import HomeScreen from '../screens/MainPages/HomeScreen'
import Wishlist from '../screens/HomePages/Wishlists/Wishlist';
import Notifications from '../screens/HomePages/Notifications/Notifications';
import Reels from '../screens/MainPages/Reels';
import MyGroups from '../screens/MainPages/MyGroups';
import More from '../screens/MainPages/More';
import OTPScreen from '../screens/HomePages/Modal/OTPScreen'
import Accountcreate from '../screens/HomePages/Modal/Accountcreate'
import RegisterScreen from '../screens/HomePages/Modal/RegisterScreen'
import SplashScreen from '../components/Splash/SplashScreen';
import FAQs from '../components/Morepage/FAQs'
import Addresses from '../screens/Morepages/Addresses'
import AddNewAddress from '../components/Morepage/address/AddNewAddress'



const StackNavigator = () => {

  NavigationBar.setBackgroundColorAsync("white");
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


  // Animated
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  const getWidth = () => {
    let width = Dimensions.get('window').width;
    width = width - 0;
    return width / 4;
  };

  const handleTabPress = (index) => {
    Animated.spring(tabOffsetValue, {
      toValue: getWidth() * index,
      useNativeDriver: true,
    }).start();
  };


  const BottomTabs = () => {
    return (
      <>
        <Tab.Navigator
          screenOptions={{ keyboardHidesTabBar: true, style: { position: 'absolute', margin: 20 } }}>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ fontSize: 10, color: focused ? "#347B72" : "#636767" }}>Home</Text>
              ),
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <HomeIconActive name="Home" width={24} />
                ) : (
                  <HomeIconInactive name="Home" width={24} />
                ),
            }}
            listeners={() => ({
              tabPress: () => handleTabPress(0),
            })}
          />
          <Tab.Screen name="Reels" component={Reels}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ fontSize: 10, color: focused ? "#347B72" : "#636767" }}>Reels</Text>
              ),
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <ReelsIconActive name="Reels" width={24} />
                ) : (
                  <ReelsIconInactive name="Reels" width={24} />
                ),
            }}
            listeners={() => ({
              tabPress: () => handleTabPress(1),
            })}
          />
          <Tab.Screen name="MyGroups" component={MyGroups}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ fontSize: 10, color: focused ? "#347B72" : "#636767" }}>MyGroups</Text>
              ),
              headerShown: true,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <GroupIconActive name="MyGroups" width={24} />
                ) : (
                  <GroupsIconInactive name="MyGroups" width={24} />
                ),
            }}
            listeners={() => ({
              tabPress: () => handleTabPress(2),
            })}
          />
          <Tab.Screen name="More" component={More}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ fontSize: 10, color: focused ? "#347B72" : "#636767" }}>More</Text>
              ),
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <MoreIconActive name="More" width={24} />
                ) : (
                  <MoreIconInactive name="More" width={24} />
                ),
            }}
            listeners={() => ({
              tabPress: () => handleTabPress(3),
            })}
          />
        </Tab.Navigator>


        <Animated.View style={{
          width: getWidth() - 30,
          height: 3.6,
          backgroundColor: '#347B72',
          position: 'absolute',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          bottom: 45,
          left: 16,
          transform: [{ translateX: tabOffsetValue }]
        }}
        />

      </>
    )
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="AccountCreate" component={Accountcreate} options={{ headerShown: true, headerTitle: '' }} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: true, headerTitle: '' }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: true }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: true }} />
        <Stack.Screen name="FAQs" component={FAQs} options={{ headerShown: true }} />
        <Stack.Screen name="Addresses" component={Addresses} options={{ headerShown: true }} />
        <Stack.Screen name="AddNewAddress" component={AddNewAddress} options={{ headerShown: true,  headerTitle: 'Add New Address' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default StackNavigator

//rnfes  