import React from 'react';
import { ScrollView, StatusBar, View, Dimensions, StyleSheet } from 'react-native';
import {Container, Divider, Card, UserInfo, UserImg, UserName, PostTime, UserInfoText, PostText, PostImg, InteractionWrapper, Interaction, InteractionText} from '../styles/HomeStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;


const HomeScreen = ({navigation}) => {
    return(
        <Container>
          <StatusBar hidden={true}/>
          <ScrollView style={styles.scroller}>

          <Card>
        <UserInfo>
          <UserImg source={require('../assets/d4.jpg')} />
          <UserInfoText>
            <UserName>BLAↃKPINK</UserName>
            <PostTime>Jun 26, 2020</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>How you like that?</PostText>
        <PostImg source={require('../assets/Post/pos3.jpg')} />
        <Divider />
        <InteractionWrapper>
          <Interaction active>
            <Icon name="heart" size={25} color="#000"/>
            <InteractionText active>Like 19m </InteractionText>
          </Interaction>
          <Interaction>
          <Icon name="md-chatbubble-outline" size={25}/>
          <InteractionText>Comment 4.3m</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>

          <Card>
        <UserInfo>
          <UserImg source={require('../assets/d4.jpg')} />
          <UserInfoText>
            <UserName>BLAↃKPINK</UserName>
            <PostTime>April 4, 2019</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Yup, we must kill this  L O V E  before it kills us too.</PostText>
        <PostImg source={require('../assets/Post/pos2.jpg')} />
        <Divider />
        <InteractionWrapper>
          <Interaction active>
            <Icon name="heart" size={25} color="#000"/>
            <InteractionText active>Like 18m </InteractionText>
          </Interaction>
          <Interaction>
          <Icon name="md-chatbubble-outline" size={25}/>
          <InteractionText>Comment 2.3m</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card> 

          <Card>
        <UserInfo>
          <UserImg source={require('../assets/d4.jpg')} />
          <UserInfoText>
            <UserName>BLAↃKPINK</UserName>
            <PostTime>Jun 22, 2017</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Kiss me like it's a lie. As if I'm your last love</PostText>
        <PostImg source={require('../assets/Post/pos1.jpg')} />
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

      <Card>
        <UserInfo>
          <UserImg source={require('../assets/d4.jpg')} />
          <UserInfoText>
            <UserName>BLAↃKPINK</UserName>
            <PostTime>Aug 8, 2016</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Yah yah yah Boombayah</PostText>
        <PostImg source={require('../assets/Post/pos6.jpg')} />
        <Divider />
        <InteractionWrapper>
          <Interaction active>
            <Icon name="heart" size={25} color="#000"/>
            <InteractionText active>Like 11m </InteractionText>
          </Interaction>
          <Interaction>
          <Icon name="md-chatbubble-outline" size={25}/>
          <InteractionText>Comment 1m</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>

      <Card>
        <UserInfo>
          <UserImg source={require('../assets/d4.jpg')} />
          <UserInfoText>
            <UserName>BLAↃKPINK</UserName>
            <PostTime>Aug 8, 2016</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>BLAↃKPINK in your Area!</PostText>
        <PostImg source={require('../assets/Post/pos5.jpg')} />
        <Divider />
        <InteractionWrapper>
          <Interaction active>
            <Icon name="heart" size={25} color="#000"/>
            <InteractionText active>Like 912m</InteractionText>
          </Interaction>
          <Interaction>
          <Icon name="md-chatbubble-outline" size={25}/>
          <InteractionText>Comment 12m</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>

     

      
</ScrollView>
         
        </Container>
      
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scroller: {
    width: screenWidth,
    paddingLeft: 18,
    paddingRight: 18,
  },
});