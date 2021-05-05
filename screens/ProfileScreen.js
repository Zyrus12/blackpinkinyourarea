import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, props, Alert, Button, StatusBar, StatusBarIOS, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Divider, Card, UserInfo, UserImg, UserName, PostTime, UserInfoText, PostText, PostImg, InteractionWrapper, Interaction, InteractionText} from '../styles/HomeStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
    return(
      <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
        >
            <Image style={styles.userImg} source={require('../assets/Post/user.jpg')} />
          <Text style={styles.userName} > Jichuu</Text>
          <Text style={styles.aboutUser} > 
              Im not scary.
          </Text>
          <View style={styles.userBtnWrapper} >
            <TouchableOpacity style={styles.userBtn} onPress={() => {AsyncStorage.removeItem('alreadyLunched'); alert("On Boarding Reset!") }}>
              <Text style={styles.userBtnTxt}>Follow</Text>
            </TouchableOpacity>
          </View>

            <View style={styles.userInfoWrapper}>
              <View style={styles.userInfoItem} >
                <Text style={styles.userInfoTitle} >2</Text>
                <Text style={styles.userInfoTitle} >Post</Text>
              </View>
              <View style={styles.userInfoItem} >
                <Text style={styles.userInfoTitle} >40m</Text>
                <Text style={styles.userInfoTitle} >Followers</Text>
              </View>
              <View style={styles.userInfoItem} >
                <Text style={styles.userInfoTitle} >0</Text>
                <Text style={styles.userInfoTitle} >Following</Text>
              </View>
            </View>

            <Card>
        <UserInfo>
          <UserImg source={require('../assets/Post/user.jpg')} />
          <UserInfoText>
            <UserName>Jichuu</UserName>
            <PostTime>April 4, 2019</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Chillin like a villain. Yeah rah rah rah...</PostText>
        <PostImg source={require('../assets/Chat/jisopost.jpg')} />
        <Divider />
        <InteractionWrapper>
          <Interaction active>
            <Icon name="heart" size={25} color="#000"/>
            <InteractionText active>Like 1.3b </InteractionText>
          </Interaction>
          <Interaction>
          <Icon name="md-chatbubble-outline" size={25}/>
          <InteractionText>Comment 122.3m</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card> 

          <Card>
        <UserInfo>
          <UserImg source={require('../assets/Post/user.jpg')} />
          <UserInfoText>
            <UserName>Jichuu</UserName>
            <PostTime>Jun 22, 2017</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Kiss me like it's a lie. As if I'm your last love</PostText>
        <Divider />
        <InteractionWrapper>
          <Interaction active>
            <Icon name="heart" size={25} color="#000"/>
            <InteractionText active>Like 9.8m </InteractionText>
          </Interaction>
          <Interaction>
          <Icon name="md-chatbubble-outline" size={25}/>
          <InteractionText>Comment 1.6m</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>  



        </ScrollView>
      </View>
    );
  };

export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .9)',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#FFC0CB',

  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 12,
    color: '#FFC0CB',
  },
  aboutUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 5,
    marginTop: 10,
  },
  userBtn: {
    borderColor: 'rgba(255,192,203, .7)',
    borderWidth: 3,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#fff',
    padding: 5,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: 'rgba(255,192,203, .8)',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',

  },
});


























