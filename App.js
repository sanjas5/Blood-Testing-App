import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { useFonts } from 'expo-font';
import RegisterScreen from './screens/RegisterScreen';


export default function App() {

  const [fontsLoaded] = useFonts({
    'athiti-extraLight': require('./assets/fonts/Athiti-ExtraLight.ttf'),
    'athiti-light': require('./assets/fonts/Athiti-Light.ttf'),
    'athiti-regular': require('./assets/fonts/Athiti-Regular.ttf'),
    'athiti-medium': require('./assets/fonts/Athiti-Medium.ttf'),
    'athiti-semiBold': require('./assets/fonts/Athiti-SemiBold.ttf'),
    'athiti-bold': require('./assets/fonts/Athiti-Bold.ttf')
  });

  if(!fontsLoaded)
    return null;
  else
    return (
      <View style={styles.container}>
        {/* <HomeScreen/> */}
        <RegisterScreen/>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
