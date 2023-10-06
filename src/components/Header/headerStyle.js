import { StyleSheet } from "react-native";

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  user: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  avatarBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: 45,
    height: 45,
    borderRadius: 4
  },
  avatar: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff"
  },

  name: { fontSize: 16, fontWeight: "600" },
  brand: { fontSize: 13 }
});
export default headerStyle;
