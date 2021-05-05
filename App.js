import 'react-native-gesture-handler';
import React, {useEffect, useState, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import {AuthContext} from './component';
import AsynStorage from '@react-native-async-storage/async-storage';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import DeveloperScreen from './screens/Developers';



const Drawer = createDrawerNavigator();


const App = () => {

    const [isLogIn, setIsLogIn] = useState();


    const authContext = useMemo(() => ({
      signIn: () => {
        setIsLogIn('Yes');
      },
      signOut: () => {
        setIsLogIn(null);
      }, 
    }));


    useEffect(() => {
      AsynStorage.getItem('alreadyLogin').then(value => {
        if(value == null){
          setIsLogIn(false); 
        }else {
          setIsLogIn(true);
        }
      })
    },[]);
  return (

  <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          { isLogIn ? 
              <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}
                  drawerStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      borderRightColor:'rgba(0, 0, 0, 0.3)',
                      borderRightWidth: 1
                  }}
              >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="Developer" component={DeveloperScreen} />
              </Drawer.Navigator>
          
        : <WelcomeScreen />
        }    
      </NavigationContainer>
  </AuthContext.Provider>
  );
}
export default App;

