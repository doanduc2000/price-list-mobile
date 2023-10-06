import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import homeStyle from "./homeStyle";
import Header from "../../components/Header/Header";
import {
  currentUserSelector,
  loadedAuthSelector
} from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanding } from "../../features/landing/landingApi";
import {
  landingListSelector,
  loadedLandingSelector
} from "../../features/landing/landingSlice";

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const loadedUser = useSelector(loadedAuthSelector);
  const landingList = useSelector(landingListSelector);
  const loadedLanding = useSelector(loadedLandingSelector);
  useEffect(() => {
    dispatch(fetchLanding(currentUser.brand_id));
  }, [dispatch]);
  return (
    <SafeAreaView style={homeStyle.bg}>
      <Header />
      <View style={homeStyle.header}>
        <Text style={homeStyle.title}>
          Thương hiệu {loadedUser && currentUser.brand.name}
        </Text>
        {loadedLanding && (
          <Text style={homeStyle.desc}>{landingList.length} Landing page</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
