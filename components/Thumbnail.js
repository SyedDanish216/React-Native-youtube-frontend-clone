import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
// import data from "./JsonFile";

export default function Thumbnail() {
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
    const [items, setItems] = useState(data);
  return (
      
    <ScrollView showsVerticalScrollIndicator={false} >
      {items.map((elem, index) => {
        const {
          thumbImage,
          time,
          channelImage,
          title,
          channelName,
          views,
          uploadedTime,
        } = elem;
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
                  source={require("../images/img1.jpg")}
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
   
  );
}

const styles = StyleSheet.create({
  ScrollView:{
overflow:"visible"
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
