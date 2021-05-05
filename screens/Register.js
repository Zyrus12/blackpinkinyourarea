import React, {useState} from 'react';
import {data} from '../firebase.js';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Butones from '../buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Register = ({navigation}) => {

    const[username, usernames] = useState(null);
    const[pass, password] = useState(null);
    const[cpass, confirmpass] = useState(null);

    const [datas, setData] = React.useState({
        username: '',
        password: '',
        confirmpass: '',
        check_textInputChange: false,
        secureTextEntry: true,
        secureConfirmTextEntry: true,
        
    });

    const textInputChange = (val) => {
        if( val.trim().length >= 6 ) {
            setData({
                ...datas,
                username: val,
                check_textInputChange: true,
                
            });
        } else {
            setData({
                ...datas,
                username: val,
                check_textInputChange: false,
                
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...datas,
                password: val,       
            });
        } else {
            setData({
                ...datas,
                password: val,
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...datas,
                confirmpass: val,       
            });
        } else {
            setData({
                ...datas,
                confirmpass: val,
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...datas,
            secureTextEntry: !datas.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...datas,
            secureConfirmTextEntry: !datas.secureConfirmTextEntry
        });
    }

    //THIS IS THE REAL DEAL

    const hashyz = function sha256(ascii) {
        function rightRotate(value, amount) {
            return (value>>>amount) | (value<<(32 - amount));
        };
        
        var mathPow = Math.pow;
        var maxWord = mathPow(2, 32);
        var lengthProperty = 'length'
        var i, j; // Used as a counter across the whole file
        var result = ''
    
        var words = [];
        var asciiBitLength = ascii[lengthProperty]*8;
        
        //* caching results is optional - remove/add slash from front of this line to toggle
        // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
        // (we actually calculate the first 64, but extra values are just ignored)
        var hash = sha256.h = sha256.h || [];
        // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
        var k = sha256.k = sha256.k || [];
        var primeCounter = k[lengthProperty];
        /*/
        var hash = [], k = [];
        var primeCounter = 0;
        //*/
    
        var isComposite = {};
        for (var candidate = 2; primeCounter < 64; candidate++) {
            if (!isComposite[candidate]) {
                for (i = 0; i < 313; i += candidate) {
                    isComposite[i] = candidate;
                }
                hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
                k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
            }
        }
        
        ascii += '\x80' // Append Ƈ' bit (plus zero padding)
        while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
        for (i = 0; i < ascii[lengthProperty]; i++) {
            j = ascii.charCodeAt(i);
            if (j>>8) return; // ASCII check: only accept characters in range 0-255
            words[i>>2] |= j << ((3 - i)%4)*8;
        }
        words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
        words[words[lengthProperty]] = (asciiBitLength)
        
        // process each chunk
        for (j = 0; j < words[lengthProperty];) {
            var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
            var oldHash = hash;
            // This is now the undefinedworking hash", often labelled as variables a...g
            // (we have to truncate as well, otherwise extra entries at the end accumulate
            hash = hash.slice(0, 8);
            
            for (i = 0; i < 64; i++) {
                var i2 = i + j;
                // Expand the message into 64 words
                // Used below if 
                var w15 = w[i - 15], w2 = w[i - 2];
    
                // Iterate
                var a = hash[0], e = hash[4];
                var temp1 = hash[7]
                    + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
                    + ((e&hash[5])^((~e)&hash[6])) // ch
                    + k[i]
                    // Expand the message schedule if needed
                    + (w[i] = (i < 16) ? w[i] : (
                            w[i - 16]
                            + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
                            + w[i - 7]
                            + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
                        )|0
                    );
                // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
                var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
                    + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2]));
                
                hash = [(temp1 + temp2)|0].concat(hash);
                hash[4] = (hash[4] + temp1)|0;
            }
            
            for (i = 0; i < 8; i++) {
                hash[i] = (hash[i] + oldHash[i])|0;
            }
        }
        
        for (i = 0; i < 8; i++) {
            for (j = 3; j + 1; j--) {
                var b = (hash[i]>>(j*8))&255;
                result += ((b < 16) ? 0 : '') + b.toString(16);
            }
        }
        return result;

    };
    function checkUser(){
        return(new Promise((resolve, reject) => {
            data.ref("accounts").orderByChild("Username").equalTo(username).once("value", (snapshot) => {
                if(snapshot.val() == null){
                    resolve(true);
                }else resolve(false);
        })}));
    }

    function addAccount(){
        return(new Promise((resolve, reject) => {
            data.ref("accounts").push({Username:username, Password:hashyz(pass)}).then((Malunggay) => 
        {
         resolve(true);
        } );
        } ))
    }

  /*DATABASE*/
  function toDatabase(){
    checkUser().then((Sibuyas) => {
        if(Sibuyas){
            addAccount().then((Kalamares) => {
                alert("User Registration Successful! You can now use your account. Thank you");
     
            });
        }else{
            alert("Username already exist! Try a new one.");
        }
    });
}  

/*REGISTER*/
function regForm(e){
    e.preventDefault();
    let validation1 = /[A-Z]/;
    let validation2 = /[a-z]/;
    let validation3 = /[!@#$%^&*\(\)_+\}\{\":?><|~\.\-]/;
    let validation4 = /[0-9]/;
  
    if(pass.length<8){
      alert("Password length should be 8 and higher");
      return false;
    }
    if(!validation1.test(pass)){
      alert("Password should contain capital letters");
      return false;
    }
    if(!validation2.test(pass)){
      alert("Password should contain small letters");
      return false;
    }
    if(!validation3.test(pass)){
      alert("Password should contain at least 1 special character");
      return false;
    }
   if(!validation4.test(pass)){
      alert("Password should contain at least 1 number");
      return false;
    }
    if(pass!==cpass){
      alert("Password didn't match");
      return false;
    }else{
      
      toDatabase();
      return true;
    }
  
  }

    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#000000' barStyle="light-content"/>

    
     

            <Animatable.View
                    style={[styles.footer, {
                        backgroundColor: '#000000'
                    }]}
                    animation="fadeInDownBig"
                >
                    <View style={styles.posz}>
                    <Animatable.Image 
                    
                animation="fadeInUpBig"
                duraton="3500"
                
           
                source={require('../assets/bpicon1.png')}
            
            
            /></View>
                <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
            <FontAwesome 
                    name="user-o"
                    color="#FFC0CB"
                    size={25}
                />
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor="#FFC0CB"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => {usernames(val);textInputChange(val)}}
                />
                 {datas.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="#FFC0CB"
                        size={25}
                    />
                </Animatable.View>
             : null}
            </View>
            <Text style={[styles.text_footer, {marginTop: 26}]}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#FFC0CB"
                        size={25}
                    />
                    <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#FFC0CB"
                    secureTextEntry={datas.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => {password(val) ;handlePasswordChange(val)}}
                    />
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {datas.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="#FFC0CB"
                        size={25}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="#FFC0CB"
                        size={25}
                    />
                    }
                </TouchableOpacity>
            </View>
            <Text style={[styles.text_footer, {marginTop: 26}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#FFC0CB"
                        size={25}
                    />
                    <TextInput 
                    placeholder="Confirm Your Password"
                    placeholderTextColor="#FFC0CB"
                    secureTextEntry={datas.secureConfirmTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => {confirmpass(val);handleConfirmPasswordChange(val)}}
                    />
                    <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {datas.secureConfirmTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="#FFC0CB"
                        size={25}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="#FFC0CB"
                        size={25}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={{paddingTop:50}}>
            <Butones text="SIGN UP" onPress={regForm} />
            </View>
            <View style={{paddingTop:10}}>
            <Butones text="SIGN IN" onPress={() => navigation.goBack()} />
            </View>
        </Animatable.View>
        <View style={styles.header}>
                <Text style={styles.text_header}>BLAↃK PINK is the Revolution</Text>

                
            </View>
        </View>
    )};

export default Register;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#000000'
    },
    header: {
        flex: 1,
        backgroundColor: '#FFC0CB',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    footer: {
        flex: 4.5,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: '#000000',
    },
    text_header: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        paddingLeft:5,
    },
    text_footer: {
        color: '#000000',
        fontSize: 20,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FFC0CB',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#FFC0CB',
        
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        paddingTop: 75,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    posz: {
        alignSelf:'center'
        
     
      
    },
  });