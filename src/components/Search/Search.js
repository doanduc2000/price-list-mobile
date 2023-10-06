import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const Search = () => {
  return (
    <View style={searchStyle.search}>
      <TextInput
        style={searchStyle.searchInput}
        placeholder="Tìm kiếm theo URL"
      />
      <Pressable style={searchStyle.searchBtn}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Pressable>
    </View>
  );
};
const searchStyle = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingLeft: 15,
    paddingVertical: 5,
    paddingRight: 10,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  searchInput: {
    width: "90%"
  },
  searchBtn: {
    maxWidth: 20,
    minWidth: 20
  }
});
export default Search;
