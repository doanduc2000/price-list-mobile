import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  bg: {
    paddingHorizontal: 15,
    backgroundColor: "#f7f7f7",
    height: "100%",
    paddingTop: 50
  },
  header: {
    marginVertical: 30,
    gap: 5
  },
  title: {
    fontSize: 24
  },
  desc: {
    fontSize: 14
  },
  landingList: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  }
});
export default homeStyle;
