import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  View
} from "react-native";
import homeStyle from "./homeStyle";
import Header from "../../components/Header";
import {
  currentUserSelector,
  loadedAuthSelector
} from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanding } from "../../features/landing/landingApi";
import {
  landingListSelector,
  landingPaginationSelector,
  loadedLandingSelector,
  loadingLandingSelector
} from "../../features/landing/landingSlice";
import LandingItem from "../../components/LandingItem";
import Search from "../../components/Search";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const loadedUser = useSelector(loadedAuthSelector);
  const landingList = useSelector(landingListSelector);
  const loadedLanding = useSelector(loadedLandingSelector);
  const loadingLanding = useSelector(loadingLandingSelector);
  const pagination = useSelector(landingPaginationSelector);

  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    setSearch(text);
  };
  useEffect(() => {
    dispatch(fetchLanding({ brandId: currentUser.brand_id, link: search }));
  }, [dispatch, search, currentUser]);
  return (
    <SafeAreaView style={homeStyle.bg}>
      <Header />
      <View style={homeStyle.header}>
        <View>
          <Text style={homeStyle.title}>
            Thương hiệu {loadedUser && currentUser.brand.name}
          </Text>
          {loadedLanding && (
            <Text style={homeStyle.desc}>{pagination.total} Landing page</Text>
          )}
        </View>
        <Pressable
          style={{ backgroundColor: "#1d80b6", padding: 10, borderRadius: 6 }}
        >
          <FontAwesomeIcon color="#fff" icon={faPlus} />
        </Pressable>
      </View>
      <Search value={search} handleSearch={handleSearch} />
      <View style={homeStyle.landingList}>
        {loadingLanding ? (
          <ActivityIndicator size="small" color="#1d80b6" />
        ) : loadedLanding && landingList.length === 0 ? (
          <Text style={{ textAlign: "center" }}>Không có dữ liệu</Text>
        ) : (
          landingList.map((item) => <LandingItem key={item.id} {...item} />)
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
