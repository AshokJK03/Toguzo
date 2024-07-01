import { Platform } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { UserProvider } from './Context/UserContext'

export default function App() {

  let [fontsLoaded] = useFonts({
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),

  })

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <>
        <UserProvider>
          <StackNavigator behavior={Platform.OS === 'ios' ? 'padding' : 'height'} />
        </UserProvider>
    </>
  );
}


