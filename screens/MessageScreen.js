import React from 'react';
import { StyleSheet, FlatList, Text, View, ImageBackground, Image, props, Alert, Button, StatusBar} from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyle';


const Messages = [
  {
    id: '1',
    userName: 'Jisoo',
    userImg: require('../assets/Chat/jiso.jpg'),
    messageTime: '4 mins ago',
    messageText:
    'NO HES MY SON,NO NEVER, Dalgom is MINE!',
  },
  {
    id: '2',
    userName: 'Lisa',
    userImg: require('../assets/Chat/lisa.jpg'),
    messageTime: '2 hours ago',
    messageText:
      "It's Jisoo playing mobile and PC games silly.",
  },
  {
    id: '3',
    userName: 'Jennie',
    userImg: require('../assets/Chat/jennie.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Too much is as bad as too little.',
  },
  { 
    id: '4',
    userName: 'Rosé',
    userImg: require('../assets/Chat/rose.jpg'),
    messageTime: '1 day ago',
    messageText:
    'See you later, maybe never...',
  },
];

const MessageScreen = ({navigation}) => {
  return (
    <Container>
      <FlatList 
        data={Messages}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default MessageScreen;

