import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Form,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Searchbar({navigation}) {
  return (
    <View style={styles.searchheader}>
      <View  style={{ flex: 1,alignItems:"center",alignSelf:"center",padding:3 }}>
        <Ionicons
          name="arrow-back-sharp"
          size={24}
          color="black"
         onPress={()=>navigation.goBack()}
        />
      </View>
      <View  style={{ flex: 8,alignSelf:"center",padding:3,backgroundColor:"#dcdde1",marginHorizontal:10}}>
        <TextInput
          type="text"
          id="header-search"
          placeholder="Search YouTube"
          name="utube"
         
        />
      </View>

      <View style={{ flex: 1, alignItems:"center",alignSelf:"center",padding:3,borderRadius:20,backgroundColor:"#dcdde1"}}>
        <FontAwesome
          name="microphone"
          size={26}
          color="black"
          
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  searchheader: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    padding:10,
    
    // justifyContent:"flex-end",
    // alignItems:"center",
    // alignContent:"center"
  },
});
