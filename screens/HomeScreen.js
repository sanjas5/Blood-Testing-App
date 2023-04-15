import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


export default function HomeScreen(){
    return (
        <View styles={styles.homeContainer}> 
            <Image style={styles.homeCover} source={require('../assets/images/homeCover.png')}/>
            <Text style={styles.homeTitle}>Analyze your blood test results</Text>
            <View style={styles.signUpContainer}>
                <Image style={styles.icon} source={require('../assets/images/googleIcon.png')}/>
                <Text style={styles.signUpTitle}>Sign Up with Google</Text>
            </View>
            <View style={styles.signUpContainer}>
                <Image source={require('../assets/images/facebookIcon.png')}/>
                <Text style={styles.signUpTitle}>Sign Up with Facebook</Text>
            </View>
            <View style={[styles.signUpContainer, styles.emailContainer]}>
                <Image source={require('../assets/images/mailIcon.png')}/>
                <Text style={styles.signUpTitle}>Sign Up with Email</Text>
            </View>

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
        width: 350
    },
    homeTitle: {
        color: '#6C63FF',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 20,
        fontFamily: 'athiti-medium',
        marginBottom: 76,
    },
    homeCover: {
        marginBottom: 58,
        alignSelf: 'center',
    },
    signUpContainer: {
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
    signUpTitle: {
        color: '#3F3D56',
        fontFamily: 'athiti-SemiBold',
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
    },
    signInTitle: {
       color: '#3F3D56', 
       textAlign: 'center',
       fontFamily: 'athiti-regular',
       fontSize: 20,
       marginTop: 22
    },
    signIn: {
        textDecorationLine: 'underline',
    },
});