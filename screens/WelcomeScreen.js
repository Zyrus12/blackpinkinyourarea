import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsynStorage from '@react-native-async-storage/async-storage';
import OnBoardingScreen from './OnBoardingScreen';
import GettingStarted from './GettingStarted';
import Login from './Login';
import Register from './Register';



const Stack = createStackNavigator();

const WelcomeScreen = () => {

const [isFirstLunch, setIsFirstLunch] = React.useState(null);
 

  useEffect(() => {
    AsynStorage.getItem('alreadyLunched').then(value => {
      if(value == null){
        AsynStorage.setItem('alreadyLunched', 'true');
        setIsFirstLunch(true); 
      }else {
        setIsFirstLunch(false);
      }
    })
  },[]);
  if(isFirstLunch == null){
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#FFC0CB",
        },
        headerTintColor: "#000000",
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
      }}>
        {isFirstLunch ?  <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{
          headerShown: false
        }} />
      : null}
        <Stack.Screen name="GettingStarted" component={GettingStarted}  options={{
          headerShown: false
        }} />
      
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: false
        }}/>
    </Stack.Navigator>
  );
}

export default WelcomeScreen;