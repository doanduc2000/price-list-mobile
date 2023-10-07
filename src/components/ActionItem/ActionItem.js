import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const ActionItem = (props) => {
  return (
    <Pressable style={style.container}>
      <View style={style.left}>
        <FontAwesomeIcon icon={props.icon} />
        <Text>{props.name}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} />
    </Pressable>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  left: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  }
});
export default ActionItem;
