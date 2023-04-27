import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ScanningScreen(){
    return(
        <View>
            <Pressable  styles={styles.homeContainer}>
                <Image source={require('../assets/images/arrowLeft.png')} style={styles.arrow}/>
            </Pressable>
            <Text style={styles.scannTitle}>Scan your blood test</Text>
           
            <Image style={styles.bloodScanImage} source={require('../assets/images/bloodAnalysis.png')}/>

            <Text style={styles.scanDescription}>Take a photo or upload a photo of your blood test and get an interpretation of your blood test results.</Text>

            <View style={styles.iconsContainer}>
                <Pressable style={styles.photosIconContainer}>
                    <Image source={require('../assets/images/scanCamIcon.png')}/>
                </Pressable>
                <Pressable style={styles.photosIconContainer}>
                    <Image source={require('../assets/images/uploadPhotoIcon.png')}/>
                </Pressable>
            </View>
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
    scannTitle: {
        color: '#3F3D56',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 20,
        fontFamily: 'athiti-semiBold',
        marginBottom: 40,
    },
    arrow:{
        top: 30,
    },
    bloodScanImage:{
        alignSelf: 'center',
    },
    scanDescription:{
        marginBottom: 14,
        marginHorizontal: 24,
        fontFamily: 'athiti-regular',
        fontSize: 20,
        textAlign: 'center',
        color: '#3F3D56'
    },
    iconsContainer:{
        marginTop: 150,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    photosIconContainer:{
        width: 100,
        height: 100,
        backgroundColor: '#F0EFFF',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        boxSizing: 'border-box',
        padding: 10,
    }, 
});