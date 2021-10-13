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
  ScrollView,
  Image,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react/cjs/react.development";

export default function Searchdisplay(props) {
  const [textinput,setTextinput]=useState("");
  const data = [
    {
      thumbImage: require("../images/img1.jpg"),
      time: "02:25",
      channelImage: require("../images/img1.jpg"),
      title:
        "Tarak Mehta Ka Ooltah Chashmah - Ep 2318 -  Full Episode - 19th September",
      channelName: "Sony Sab",
      views: "13M",
      uploadedTime: "2 years ago",
    },
    {
      thumbImage: require("../images/img2.jpg"),
      time: "02:25",
      channelImage: require("../images/img2.jpg"),
      title:
        "Tarak Mehta Ka Ooltah Chashmah - Ep 2318 -  Full Episode - 19th September",
      channelName: "Sony Sab",
      views: "14M",
      uploadedTime: "3 years ago",
    },
    {
        thumbImage:require("../images/img3.jpg"),
        time:"02:25",
        channelImage:require("../images/img3.jpg"),
        title:"Best of Luck Nikki - Ep 2318 -  Full Episode - 20th September",
        channelName:"Disney",
        views:"11M",
        uploadedTime:"5 years ago"
    },
    {
        thumbImage:require("../images/img4.jpg"),
        time:"30:45",
        channelImage:require("../images/img4.jpg"),
        title:"Suno Chanda",
        channelName:"Hum Tv",
        views:"11M",
        uploadedTime:"2 years ago"
    },
    {
        thumbImage:require("../images/img5.jpg"),
        time:"02:00",
        channelImage:require("../images/img5.jpg"),
        title:"!3 reasons why",
        channelName:"Netfkix",
        views:"16M",
        uploadedTime:"1 years ago"
    }
  ];
  const [output, setOutput] = useState([]);
  const { elem, input } = props.route.params;
  useEffect(() => {
    data.filter((val) => {
      if (val.title.includes(elem)) {
        return setOutput((outputtext) => [...outputtext, val]);
      }
    });
    setTextinput(input);
  },[]);

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
            onPress={() => props.navigation.goBack()}
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
            value={textinput}
            onChangeText={(e) => setTextinput(e)}
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        
      >
        {output.map((el, index) => {
          const {
            thumbImage,
            time,
            channelImage,
            title,
            channelName,
            views,
            uploadedTime,
          } = el;
          return (
            <View style={styles.box} key={index}>
              <View style={styles.thumbnail}>
                <View style={styles.imagetime}>
                  <Image
                    source={thumbImage}
                    style={{ height: 250, width: "100%" }}
                  />
                  <View
                    style={{
                      right: "2%",
                      bottom: "2%",
                      backgroundColor: "black",
                      position: "absolute",
                      width: 50,
                      opacity: 0.7,
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <Text style={{ color: "#FFFFFF", alignSelf: "center" }}>
                      {time}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.title}>
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                  <Image
                    source={channelImage}
                    style={{ width: 30, height: 30, borderRadius: 40 }}
                  />
                </View>
                <View style={{ flexDirection: "column", flex: 8 }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      {title}
                      {/* Tarak Mehta Ka Ooltah Chashmah - Ep 2318 - Full Episode -
                    19th September */}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "200" }}>
                      {channelName} - {views} - {uploadedTime}
                      {/* Sony Sab - 14M views - 3 years ago */}
                    </Text>
                  </View>
                </View>
                <View
                  style={{ alignContent: "flex-end", alignItems: "flex-end" }}
                >
                  <Entypo
                    name="dots-three-vertical"
                    size={13}
                    color="black"
                    style={{ fontWeight: "100" }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  ScrollView:{
    overflow:"visible"
      },
  container: {
    marginTop: StatusBar.currentHeight,
    height:"100%",
    display:"flex"
  },
  searchheader: {
    flexDirection: "row",
    padding: 10,
  },
  box: {
    height: 350,
    // backgroundColor: "black",
    width: "100%",
    marginTop: 5,
  },
  thumbnail: {
    width: "100%",
    height: 250,
    backgroundColor: "gray",

    position: "relative",
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
    justifyContent: "space-around",
  },
});
