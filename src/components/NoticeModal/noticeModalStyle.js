import { StyleSheet } from "react-native";

const noticeModalStyle = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 8,
    overflow: "hidden",
    paddingBottom: 20
  },
  header: {
    padding: 10
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 21
  },
  content: {
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontSize: 18
  },
  control: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20
  },
  btn: {
    backgroundColor: "#3481aa",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 12
  },
  textBtn: {
    color: "#fff",
    fontSize: 16
  }
});
export default noticeModalStyle;
