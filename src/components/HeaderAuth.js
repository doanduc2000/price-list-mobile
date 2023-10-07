import React from "react";
import { View, Image } from "react-native";
import GradientText from "./GradientText";

const HeaderAuth = () => {
  return (
    <View style={headerAuthStyle.header}>
      <Image
        style={headerAuthStyle.tinyLogo}
        source={require("../../assets/logo.png")}
      />
      <GradientText
        style={headerAuthStyle.title}
        colors={["#c68f22", "#daaf69"]}
        text={"SCI Price List"}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      />
    </View>
  );
};

const headerAuthStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  tinyLogo: {
    width: 40,
    height: 40
  },
  title: {
    fontSize: 30,
    fontWeight: 600
  }
});
export default HeaderAuth;
