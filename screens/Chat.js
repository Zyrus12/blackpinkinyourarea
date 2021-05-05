import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, props, Alert, Button, StatusBar, StatusBarIOS, ViewComponent} from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/FontAwesome';
import {message} from './MessageScreen';



const ChatScreen = ({navigation}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello Derr',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: require('../assets/Chat/jiso.jpg'),
          },
        },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderSend = (props) => {
        return(
            <Send {...props}>
                <View>
                    <Icon name='send' size={35} color='rgba(255,192,203, 1)' style={{padding: 4, paddingRight: 8}} />
                </View>
            </Send>
        );
    }



    const renderBubble = (props) => {
        return(
        <Bubble 
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: 'rgba(255,192,203, 1)'
                }
            }}
            textStyle={{
                right:{
                    color: 'rgb(0,0,0)'
                }
            }}
            timeTextStyle={{
                left: {
                  color: 'rgb(0,0,0)',
                },
                right: {
                  color: 'black',
                },
              }}
        />
        );
    }

    const scrollToBottomComponent = () => {
        return(
            <Icons name='angle-double-down' size={25} color="#333" />
        );
    }


    return(
    <View style={{backgroundColor: 'rgba(0, 0, 0, 1)', flex:1}}>
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}

      />
      </View>
    );
  };

export default ChatScreen;