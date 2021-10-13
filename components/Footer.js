import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={{width:"20%",position:"absolute",bottom:5,left:"0%",alignItems:"center"}}>
        <Entypo name="home" size={24} color="black" />
      </View>

      <View style={{width:"20%",position:"absolute",bottom:5,left:"20%",alignItems:"center"}}>
        <AntDesign name="playcircleo" size={24} color="black" />
      </View>

      <View style={{width:"20%",position:"absolute",bottom:5,left:"40%",alignItems:"center"}}>
        <AntDesign name="pluscircleo" size={24} color="black" />
      </View>
      <View style={{width:"20%",position:"absolute",bottom:5,left:"60%",alignItems:"center"}}>
        <MaterialIcons name="subscriptions" size={24} color="black" />
      </View>
      <View style={{width:"20%",position:"absolute",bottom:5,left:"80%",alignItems:"center"}}>
        <MaterialIcons name="library-add" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:"relative",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    
    height:35
  },
});
