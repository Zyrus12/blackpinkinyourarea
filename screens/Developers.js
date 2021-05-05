import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, props, Alert, Button, StatusBar, StatusBarIOS, ScrollView, TouchableOpacity} from 'react-native';

const DeveloperScreen = ({navigation}) => {
    return(
      <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
        >
             <Image style={styles.userImg} source={require('../assets/Chat/user3.jpg')} />
          <Text style={styles.userName} >Garlando, Jero.</Text> 
            <View style={styles.userInfoWrapper}>
              <View style={styles.userInfoItem} >
                <Text style={styles.userInfoTitle} >Designer / Idea</Text>
                <Text style={styles.userInfoTitle} >CS409 - IT32S2</Text>
              </View>
             
            </View>

            <Image style={styles.userImg} source={require('../assets/Chat/profile.jpg')} />
          <Text style={styles.userName} >Gremio, Zyrus D.</Text>
            <View style={styles.userInfoWrapper}>
              <View style={styles.userInfoItem} >
                <Text style={styles.userInfoTitle} >Main Programmer / Backend & Frontend</Text>
                <Text style={styles.userInfoTitle} >CS409 - IT32S2</Text>
             
              </View>
             
            </View>

            <Image style={styles.userImg} source={require('../assets/Chat/user2.jpg')} />
          <Text style={styles.userName} >Sidamon, Tristan "VJ"</Text> 
            <View style={styles.userInfoWrapper}>
              <View style={styles.userInfoItem} >
                <Text style={styles.userInfoTitle} >Designer / Researcher</Text>
                <Text style={styles.userInfoTitle} >CS409 - IT32S2</Text>
      
              </View>
          
            </View>

            <Image style={styles.userImg} source={require('../assets/Chat/user1.jpg')} />
          <Text style={styles.userName} >Sioson, Angelo</Text>
            <View style={styles.userInfoWrapper}>
              <View style={styles.userInfoItem} >
                <Text style={styles.userInfoTitle} >Assistant Programmer / Frontend</Text>
                <Text style={styles.userInfoTitle} >CS409 - IT32S2</Text>
              
              </View>
             
            </View>


        </ScrollView>
      </View>
    );
  };

export default DeveloperScreen;


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
    marginTop: 25

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
    borderWidth: 2,
    borderColor: 'transparent',
    paddingBottom: 15,
    borderBottomColor: 'rgba(255,192,203, .7)'
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


























