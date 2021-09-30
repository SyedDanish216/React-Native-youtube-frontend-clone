import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';



export default function Thumbnail() {
    return (
        <View style={styles.box}>
            <View style={styles.thumbnail}>

                <View style={styles.imagetime}>
                    <Image source={require('../images/img1.jpg')} style={{ height: 250, width: "100%" }} />
                    <View style={{ right: "2%", bottom: "2%", backgroundColor: "black", position: "absolute", width: 50, opacity: 0.7, alignItems: "center", alignContent: "center" }}><Text style={{ color: "#FFFFFF", alignSelf: "center" }}>02:33</Text></View>
                </View>


            </View>
            <View style={styles.title}>
                <View style={{flex:1,alignItems:"flex-start"}}>
                    <Image source={require('../images/img2.jpg')} style={{ width: 30, height: 30, borderRadius: 40 }} />
                </View>
                <View style={{ flexDirection: "column", flex: 8 }}>
                    <View>
                        <Text style={{fontWeight:"bold",fontSize:15}}>Tarak Mehta Ka Ooltah Chashmah - Ep 2318 -  Full Episode - 19th September</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "200" }}>Sony Sab - 14M views - 3 years ago</Text>
                    </View>
                </View>
                <View style={{alignContent:"flex-end",alignItems:"flex-end"}}>
                    <Entypo name="dots-three-vertical" size={13} color="black" style={{fontWeight:"100"}} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 350,
        // backgroundColor: "black",
        width: "100%",
        marginTop: 15,

    },
    thumbnail: {
        width: "100%",
        height: 250,
        backgroundColor: "gray",

        position: "relative"
    },
    imagetime: {
        height: 250,
        width: "100%",
        backgroundColor: "black",
        position: "absolute",

    },
    title: {
        flexDirection: "row",
        marginVertical: 16,
        marginHorizontal: 10,
        justifyContent:"space-around",
        

    }


})