import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import homeStyle from "./homeStyle";
import { useDispatch } from "react-redux";

import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <SafeAreaView style={homeStyle.bg}>
      <Header />
    </SafeAreaView>
  );
};

export default Home;
