import { StyleSheet } from "react-native";

const landingItemStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20
  },
  status: {
    width: 7,
    height: 7,

    borderRadius: 20
  }
});
export default landingItemStyle;
