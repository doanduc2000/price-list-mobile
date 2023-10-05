import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import homeStyle from "./homeStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import authSlice from "../../features/auth/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        onPress={() => {
          dispatch(authSlice.actions.logout());
        }}
        title="Đăng xuất"
      />
    </SafeAreaView>
  );
};

export default Home;
