import React, { Component } from 'react';
import { Text, View, StyleSheet,SafeAreaView, StatusBar,TouchableOpacity,Platform,ImageBackground,Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style = {styles.conatiner}>
                    <SafeAreaView style = {styles.droidsafearea}></SafeAreaView>
                    <ImageBackground source = {require("../assets/bg.png")} style = {styles.bgImage}>
                    <View style = {styles.titleBar}>
                        <Text style = {styles.titleText}>ISS Tracker App </Text>
                    </View>            

            <TouchableOpacity style = {styles.button1}>
                <Text style = {styles.buttonText}>ISS Location</Text>
                <Text style = {styles.buttonText}>Click Here -></Text>
                <Image source = {require("../assets/iss.jpg")} style = {styles.Iconimage}></Image>
                </TouchableOpacity>            
            <TouchableOpacity style = {styles.button1}>
                <Text style = {styles.buttonText}>Meteoroids</Text>
                <Image source={require("../assets/meteor.jpg")} style = {styles.Iconimage}></Image>
                </TouchableOpacity>
            </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    droidsafearea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "red"
    },
    button1: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 20,
        backgroundColor: "white"
    },
    buttonText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        marginTop: 70,
        paddingLeft: 30
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover"
    },
    Iconimage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 650,
        top: -10
    },
    
});