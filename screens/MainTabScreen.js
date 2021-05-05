import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import ProfileScreen from './ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './Chat';


const HomeStack = createStackNavigator();
const MessageStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();





const MainTabScreen = () => {

    return(
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgba(0, 0, 0, 1)"
      barStyle={{ backgroundColor: '#FFC0CB' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'rgba(0, 0, 0, 1)',
          LabelColor:'#000000',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color='#000000' size={26} />
          ),
        }}
      />
     
       <Tab.Screen
        name="Message"
        component={MessageStackScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarColor: '#FFC0CB',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-chatbubbles" color='#000000' size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#FFC0CB',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color='#000000' size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );

};




export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#FFC0CB",
      },
      title:null

    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu-outline" size={33} 
          backgroundColor="#FFC0CB"
          onPress={() => {navigation.openDrawer()}}>  
          </Icon.Button>
        )   
      }}/>
  </HomeStack.Navigator>
);


const MessageStackScreen = ({navigation}) => (
  <MessageStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#FFC0CB",
      },
      title:null
    }}>
      <MessageStack.Screen name="Message" component={MessageScreen} options={{
        headerLeft: () => (
          <Icon.Button name="menu-outline" size={33} 
          backgroundColor="#FFC0CB"
          onPress={() => {navigation.openDrawer()}}>  
          </Icon.Button>
        )
      }}/>
      <MessageStack.Screen name="Chat" component={ChatScreen} options={({route}) => ({
        title: route.params.userName,
        headerTitleAlign:'center',
        headerStyle:{
          height: 100,
          backgroundColor:"#FFC0CB",
        },
        headerTitleStyle:{fontFamily: "monospace", fontSize: 30, fontWeight: 'bold'},
        headerTitleContainerStyle: { paddingTop: 30 } 
    })}
    />

  </MessageStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#FFC0CB",
      },
      title:null
    }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        headerLeft: () => (
          <Icon.Button name="menu-outline" size={33} 
          backgroundColor="#FFC0CB"
          onPress={() => {navigation.openDrawer()}}>  
          </Icon.Button>
        )
      }}/>
  </ProfileStack.Navigator>
);

