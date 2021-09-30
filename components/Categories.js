import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Categories() {
    const [activeTab, setActiveTab] = useState('');
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>

            <CategoryButton
                text="Explore"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <View style={{ width: 2, backgroundColor: "#d1d8e0", marginHorizontal: 4 }}>
            </View>
            <CategoryButton
                text="All"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <CategoryButton
                text="Suno Chanda"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <CategoryButton
                text="Tarak Mehta Ka Ulta Chashma"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <CategoryButton
                text="Children Music"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />



    

        </ScrollView>



    )
}
const CategoryButton = (props) => {
    return (
        <TouchableOpacity

            onPress={() => { props.setActiveTab(props.text) }}
            style={{

                backgroundColor: props.activeTab === props.text ? "gray" : "#dcdde1",
                padding: 6,
                marginHorizontal: 10,
                borderRadius:props.text==='Explore'?0:20,
                // color:props.activeTab === props.text ?"white":"black"
                 

                
                


            }}

        >
            <Text style={{ color: props.activeTab === props.text ? "white" : "black", fontWeight: "bold", fontSize: 18 }}>{props.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        marginTop: 15,
        

    },

})