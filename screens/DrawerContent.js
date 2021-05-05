import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {AuthContext} from '../component';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';



export function DrawerContent(props) {

    const {signOut} = React.useContext(AuthContext);

 
//#FFC0CB

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 20}}>
                            <Avatar.Image 
                                source={require('../assets/d4.jpg')}
                                size={100}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>BLAↃKPINK</Title>
                                <Caption style={styles.caption}>@blackpinkofficial</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph]}>37.2m</Paragraph>
                                <Caption style={styles.caption1}>Followers</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph]}>4</Paragraph>
                                <Caption style={styles.caption1}>Following</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-home-outline" 
                                color='#FFC0CB'
                                size={size}
                                />
                            )}
                            labelStyle={{
                                color: '#FFC0CB',
                                fontSize: 18
                            }}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-person-outline" 
                                color='#FFC0CB'
                                size={size}
                                />
                            )}
                            labelStyle={{
                                color: '#FFC0CB',
                                fontSize: 18
                            }}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-logo-react" 
                                color='#FFC0CB'
                                size={size}
                                />
                            )}
                            labelStyle={{
                                color: '#FFC0CB',
                                fontSize: 18
                            }}
                            label="Developers"
                            onPress={() => {props.navigation.navigate('Developer')}}
                        />
                       
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="ios-log-out-outline" 
                        color= '#FFC0CB'
                        size={size}
                        />
                    )}
                    labelStyle={{
                        color: '#FFC0CB'
                    }}
                    label="Sign Out"
                    onPress={() => {signOut(); AsyncStorage.removeItem('alreadyLogin')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 23,
      marginTop: 20,
      marginBottom: 5,
      fontWeight: 'bold',
      color:'#FFC0CB'
    },
    caption: {
      paddingTop: 10,
      fontSize: 16,
      lineHeight: 16,
      color:'#FFC0CB',
    },
    caption1: {
        fontSize: 17,
        lineHeight: 17,
        color:'#FFC0CB'
      },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
      position:'relative'
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 5,
      fontSize: 20,
      color:'#FFC0CB',
      
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        borderTopColor: '#FFC0CB',
        borderTopWidth: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });