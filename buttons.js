import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


export default function Butones({text, onPress}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.pos}>
            <View style={styles.button}>
                <Text style={styles.buttonText} > {text}  </Text> 
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        backgroundColor: "#000000",
        borderColor: "#FFC0CB",
        borderWidth: 2.5,
        width: '80%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: "#FFC0CB",
        textAlign: "center",
        fontSize: 22,
        paddingBottom: 1,
        fontWeight: 'bold',
    },
    pos:{
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    
})