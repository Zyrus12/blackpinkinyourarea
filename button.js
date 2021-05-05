import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function MyButton({text, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText} > {text}  </Text> 
                 <View style={styles.pos}>
                 <MaterialIcons 
                        name="navigate-next"
                        color="#000000"
                        size={35}
                       
                    />
                 </View>
               
                
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        backgroundColor: "#FFC0CB",
        borderColor: "#000000",
        borderWidth: 2.5,
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: "#000000",
        textAlign: "center",
        fontSize: 16,
        paddingBottom: 1,
        fontWeight: 'bold',
        
        
      
    }, 
    pos:{
        position: 'absolute',
        top: -1,
        right: 2
    },
})