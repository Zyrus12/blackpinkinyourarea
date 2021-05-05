import React from 'react';
import { 
    View, 
    Text, 
    Dimensions,
    StyleSheet,
    StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import MyButton from '../button';





const GettingStarted = ({navigation}) => {
    

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#000000' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="3500"
                
                
            source={require('../assets/bpicon1.png')}
            style={styles.logo}
            
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: '#FFC0CB'
            }]}
            animation="fadeInUpBig"
        >
            <Text style={styles.title}>Stay connected with every Blinks! 🖤</Text>
            <Text style={styles.text}>Sign in with account</Text>
            
            
                <View style={styles.button}>
                 <MyButton text="Get Started " onPress={() => navigation.replace("Login")} />
                 </View>
            
        </Animatable.View>
      </View>
    );
};

export default GettingStarted;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000000'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#FFC0CB',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#000000',
      fontSize: 30,
      fontWeight: '700'
  },
  text: {
      color: '#000000',
      marginTop:5,
      fontSize:22,
      paddingTop: 15
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});