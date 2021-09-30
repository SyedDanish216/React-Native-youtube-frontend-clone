import React from "react";
import { View, Text, StatusBar, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

export default function HeaderTabs({name}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: 4,
          alignItems: "center",
        }}
      >
        <AntDesign name="youtube" size={36} color="red" />
        <Text style={{ marginHorizontal: 4, fontSize: 24, fontWeight: "bold" }}>
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 3,
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 4,
        }}
      >
        <EvilIcons
          name="external-link"
          size={38}
          color="black"
          style={{ paddingHorizontal: 11 }}
        />
        <Ionicons
          name="notifications-outline"
          size={30}
          color="black"
          style={{ paddingHorizontal: 11 }}
        />
        <EvilIcons
          name="search"
          size={38}
          color="black"
          style={{ paddingHorizontal: 11 }}
           onPress={() => name.navigate('Details')}
        />
        <Image
          source={require("../images/image.png")}
          style={{
            width: 40,
            height: 30,
            borderRadius: 16,
            paddingHorizontal: 11,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
  },
});
