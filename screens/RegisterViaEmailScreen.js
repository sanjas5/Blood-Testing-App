import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";


export default function RegisterViaEmailScreen(){
    return (
        <View styles={styles.homeContainer}> 
            <Pressable>
                <Image source={require('../assets/images/arrowLeft.png')} style={styles.arrow}/>
            </Pressable>
            <Text style={styles.registerTitle}>What is your email?</Text>
            <TextInput style={styles.inputContainer} placeholder="Email" placeholderTextColor="#3F3D56" />

            <Pressable style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
            </Pressable>
            
            <Pressable>
                <Text style={styles.anotherMethod}>Or use another method</Text>
            </Pressable>

            <Text style={styles.signInTitle}>Already have an account? 
                <Text style={styles.signIn}> Sign in.</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer:{
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerTitle: {
        color: '#3F3D56',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 20,
        fontFamily: 'athiti-semiBold',
        marginBottom: 50,
    },
    arrow:{
         top: 30,
    },	
    inputContainer: {
        width: 350,
        height: 48,
        borderColor: '#6C63FF',
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 16,
        marginBottom: 18,
        color: '#6C63FF',
        fontFamily: 'athiti-extraLight',
        fontSize: 20
    },
    continueButton: {
        backgroundColor: '#F0EFFF',
        width: 350,
        height: 48,
        borderWidth: 0,
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 14,
    },
    continueText: {
        fontFamily: 'athiti-semiBold',
        fontSize: 20,
        color: '#3F3D56',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent : 'center',
        paddingVertical: 8,
    },
    anotherMethod: {
        marginTop: 22,
        marginBottom: 362,
        fontFamily: 'athiti-regular',
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#3F3D56'
    },
    signInTitle: {
       color: '#3F3D56', 
       textAlign: 'center',
       fontFamily: 'athiti-regular',
       fontSize: 20,
    },
    signIn: {
        textDecorationLine: 'underline',
    },
});