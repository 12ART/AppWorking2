import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    TextInput
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>BUSINESS WORK</Text>
                    </View>

                    <Image source={require("../assets/logo-removebg.PNG")} style={styles.iconImage}></Image>
                    <SafeAreaView>
                        <TextInput
                           placeholder="Introduce tu email"
                           style={styles.inputEmail}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="useless placeholder"
                           
                        />
                        </SafeAreaView>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Meteoros")}>
                        <Text style={styles.routeText}>INICIAR SESIÓN</Text> 
                    </TouchableOpacity>
                    <Text style={styles.knowMore}>{"No tienes cuenta?  REGISTRATE "}</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        opacity: .9
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 200,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        marginTop:50,
        marginLeft:80,
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
      
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 5,
        paddingLeft: 50
    },
    knowMore: {
        
        paddingLeft: 40,
        color: "white",
        fontSize: 20
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 50,
        width: 550,
        resizeMode: "contain",
        right:30,
        top: 10,
       
    },
    inputEmail: {
        marginTop:200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
});
