import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import landingItemStyle from "./LandingItemStyle";

const LandingItem = (props) => {
  return (
    <Pressable style={landingItemStyle.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          width: "75%"
        }}
      >
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../../../assets/parisIcon.webp")}
        />
        <View>
          <Text style={{ color: "#444", fontWeight: "600" }}>
            {props.category.category}
          </Text>
          <Text
            style={{ color: "#777", fontStyle: "italic" }}
            numberOfLines={1}
            ellipsizeMode="middle"
          >
            {props.url}
          </Text>
        </View>
      </View>
      <View
        style={[
          landingItemStyle.status,
          { backgroundColor: props.status ? "green" : "red" }
        ]}
      ></View>
    </Pressable>
  );
};

export default LandingItem;
