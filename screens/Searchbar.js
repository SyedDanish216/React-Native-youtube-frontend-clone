import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Form,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react/cjs/react.development";

export default function Searchbar({ navigation }) {

  const data = [
    {
      thumbImage: "../images/img1.jpg",
      time: "02:25",
      channelImage: "../images/tarak.jpg",
      title:
        "Tarak Mehta Ka Ooltah Chashmah - Ep 2318 -  Full Episode - 19th September",
      channelName: "Sony Sab",
      views: "13M",
      uploadedTime: "2 years ago",
    },
    {
      thumbImage: "../images/img2.jpg",
      time: "02:25",
      channelImage: "../images/tarak.jpg",
      title: "Best of Luck Nikki - Ep 2318 -  Full Episode - 20th September",
      channelName: "Sony Sab",
      views: "14M",
      uploadedTime: "3 years ago",
    },
    {
      thumbImage: "../images/tarak.jpg",
      time: "02:25",
      channelImage: "../images/tarak.jpg",
      title: "Suno Chanda -  Full Episode - 30th September",
      channelName: "Sony Sab",
      views: "11M",
      uploadedTime: "5 years ago",
    },
    {
      thumbImage: "../images/tarak.jpg",
      time: "02:25",
      channelImage: "../images/tarak.jpg",
      title: "Raqse Bismil -  Full Episode - 30th September",
      channelName: "Sony Sab",
      views: "11M",
      uploadedTime: "5 years ago",
    },
  ];
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  useEffect(() => {
    function setFunc() {
      setOutput([]);
    }
    setFunc();
    data.filter((val) => {
      if (input === "") return setOutput([]);
      else if (val.title.includes(input)) {
        return setOutput((outputtext) => [...outputtext, val.title]);
      }
    });
  }, [input]);
  return (
    <View style={styles.container}>
      <View style={styles.searchheader}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            alignSelf: "center",
            padding: 3,
          }}
        >
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            flex: 8,
            alignSelf: "center",
            padding: 3,
            backgroundColor: "#dcdde1",
            marginHorizontal: 10,
          }}
        >
          <TextInput
            type="text"
            id="header-search"
            placeholder="Search YouTube"
            name="utube"
            value={input}
            onChangeText={(e) => setInput(e)}
          />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            alignSelf: "center",
            padding: 3,
            borderRadius: 20,
            backgroundColor: "#dcdde1",
          }}
        >
          <FontAwesome name="microphone" size={26} color="black" />
        </View>
      </View>
    
        <View style={styles.searchblocks}>
          {output.map((elem, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => navigation.navigate('Searchresult',{
                input,
                elem
              })}>
                <Text>{elem}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  searchheader: {
    flexDirection: "row",
    padding: 10,

    // justifyContent:"flex-end",
    // alignItems:"center",
    // alignContent:"center"
  },
  searchblocks: {
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 20,

    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
