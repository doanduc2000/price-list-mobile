import React, { useEffect } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
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
  landingPaginationSelector,
  loadedLandingSelector
} from "../../features/landing/landingSlice";
import LandingItem from "../../components/LandingItem/LandingItem";
import Search from "../../components/Search/Search";

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const loadedUser = useSelector(loadedAuthSelector);
  const landingList = useSelector(landingListSelector);
  const loadedLanding = useSelector(loadedLandingSelector);
  const pagination = useSelector(landingPaginationSelector);
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
          <Text style={homeStyle.desc}>{pagination.total} Landing page</Text>
        )}
      </View>
      <Search />
      <View style={homeStyle.landingList}>
        {loadedLanding &&
          landingList.map((item) => <LandingItem key={item.id} {...item} />)}
      </View>
    </SafeAreaView>
  );
};

export default Home;
