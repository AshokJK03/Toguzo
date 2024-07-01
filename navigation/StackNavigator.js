import { useRef, React } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, Animated, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from 'expo-navigation-bar';
import HomeIconActive from '../assets/images/NavigationTab/HomeIconActive.svg'
import HomeIconInactive from '../assets/images/NavigationTab/HomeIconInactive.svg'
import ReelsIconActive from '../assets/images/NavigationTab/ReelsIconActive.svg'
import ReelsIconInactive from '../assets/images/NavigationTab/ReelsIconInactive.svg'
import MoreIconActive from '../assets/images/NavigationTab/MoreIconActive.svg'
import MoreIconInactive from '../assets/images/NavigationTab/MoreIconInactive.svg'
import GroupIconActive from '../assets/images/NavigationTab/GroupIconActive.svg'
import GroupsIconInactive from '../assets/images/NavigationTab/GroupIconInactive.svg'
import HomeScreen from '../screens/MainPages/HomeScreen'
import Wishlist from '../screens/HomePages/Wishlists/Wishlist';
import Notifications from '../screens/HomePages/Notifications/Notifications';
import Reels from '../screens/MainPages/Reels';
import MyGroups from '../screens/MainPages/MyGroups';
import More from '../screens/MainPages/More';
import OTPScreen from '../screens/HomePages/Modal/OTPScreen'
import Accountcreate from '../screens/HomePages/Modal/Accountcreate'
import SplashScreen from '../components/Splash/SplashScreen';



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
          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              position: 'absolute',
              height: 62,
              paddingBottom: 8,
              paddingTop: 10
            }
          }}>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{
                  fontSize: 12,
                  color: focused ? "#347B72" : "#636767",
                  fontWeight: focused ? 600 : 500,
                  fontFamily: focused ? 'Nunito-SemiBold' : 'Nunito-Medium'
                }}>Home</Text>
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
                <Text style={{
                  fontSize: 12,
                  color: focused ? "#347B72" : "#636767",
                  fontWeight: focused ? 600 : 500,
                  fontFamily: focused ? 'Nunito-SemiBold' : 'Nunito-Medium'
                }}>Reels</Text>
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
                <Text style={{
                  fontSize: 12,
                  color: focused ? "#347B72" : "#636767",
                  fontWeight: focused ? 600 : 500,
                  fontFamily: focused ? 'Nunito-SemiBold' : 'Nunito-Medium'
                }}>MyGroups</Text>
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
                <Text style={{
                  fontSize: 12,
                  color: focused ? "#347B72" : "#636767",
                  fontWeight: focused ? 600 : 500,
                  fontFamily: focused ? 'Nunito-SemiBold' : 'Nunito-Medium'
                }}>More</Text>
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
          width: 64,
          height: 4,
          backgroundColor: '#347B72',
          position: 'absolute',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          bottom: 58,
          left: 14,
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
        <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: true }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default StackNavigator

//rnfes