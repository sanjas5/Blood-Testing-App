import React from "react";
import { StyleSheet, View, Text, Image, Pressable, TextInput } from "react-native";


export default function SignInScreen(){
    return (
        <View styles={styles.homeContainer}> 
            <Pressable>
                <Image source={require('../assets/images/arrowLeft.png')} style={styles.arrow}/>
            </Pressable>
            <Text style={styles.registerTitle}>Sign In account</Text>
           
            <TextInput style={styles.inputContainer} placeholder="Email" placeholderTextColor="#3F3D56"/>
            <TextInput style={styles.inputContainer} placeholder="Password" placeholderTextColor="#3F3D56"/>
            <Pressable>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </Pressable>

            <Pressable style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
            </Pressable>

            <View style={styles.signInContainer}>
                <Image style={styles.icon} source={require('../assets/images/googleIcon.png')}/>
                <Text style={styles.signInTitle}>Sign In with Google</Text>
            </View>
            <View style={styles.signInContainer}>
                <Image source={require('../assets/images/facebookIcon.png')}/>
                <Text style={styles.signInTitle}>Sign In with Facebook</Text>
            </View>
            <View style={[styles.signInContainer, styles.emailContainer]}>
                <Image source={require('../assets/images/mailIcon.png')}/>
                <Text style={styles.signInTitle}>Sign In with Email</Text>
            </View>

            <Text style={styles.signUpTitle}>Don't have an account?</Text>
            <Text style={[styles.signUpTitle,styles.signUp]}> Create new.</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer:{
        display: 'flex',
        flexDirection: 'column',
        width: 350
    },
    registerTitle: {
        color: '#3F3D56',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 20,
        fontFamily: 'athiti-semiBold',
        marginBottom: 60,
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
        marginBottom: 14,
        color: '#6C63FF',
        fontFamily: 'athiti-extraLight',
        fontSize: 20
    },
    forgotPassword: {
        marginBottom: 14,
        fontFamily: 'athiti-regular',
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#3F3D56'
    },
    signInButton: {
        backgroundColor: '#F0EFFF',
        width: 350,
        height: 48,
        borderWidth: 0,
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 84,
    },
    signInText: {
        fontFamily: 'athiti-semiBold',
        fontSize: 20,
        color: "#3F3D56",
        textAlign: 'center',
        alignContent: 'center',
        justifyContent : 'center',
        paddingVertical: 8,
    },
    signInContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#F0EFFF',
        alignItems: 'center',
        paddingLeft: 16,
        width: 350,
        height: 48,
        borderWidth: 0,
        borderRadius: 30,
        overflow: 'hidden',
        marginBottom: 16,
    },
    signInTitle: {
        color: '#3F3D56',
        fontFamily: 'athiti-semiBold',
        fontWeight: 600,
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        marginRight: 50,
        width: 230,
    },
    emailContainer: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#6C63FF',
        backgroundColor: '#FFFFFF',
        marginBottom: 22
    },
    signUpTitle: {
       color: '#3F3D56', 
       textAlign: 'center',
       fontFamily: 'athiti-regular',
       fontSize: 20,
    },
    signUp: {
        textDecorationLine: 'underline',
        fontFamily: 'athiti-bold',
    },
});