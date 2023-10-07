import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import { currentUserSelector, loadedAuthSelector } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLanding } from '../features/landing/landingApi';
import {
  landingListSelector,
  landingPaginationSelector,
  loadedLandingSelector,
  loadingLandingSelector,
} from '../features/landing/landingSlice';
import LandingItem from '../components/LandingItem';
import Search from '../components/Search';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AddLanding from '../components/AddLanding';

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const loadedUser = useSelector(loadedAuthSelector);
  const landingList = useSelector(landingListSelector);
  const loadedLanding = useSelector(loadedLandingSelector);
  const loadingLanding = useSelector(loadingLandingSelector);
  const pagination = useSelector(landingPaginationSelector);
  const [isAddLanding, setIsAddLanding] = useState(false);
  const [search, setSearch] = useState('');

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
          <Text style={homeStyle.title}>Thương hiệu {loadedUser && currentUser.brand.name}</Text>
          {loadedLanding && <Text style={homeStyle.desc}>{pagination.total} Landing page</Text>}
        </View>
        <Pressable
          style={{ backgroundColor: '#1d80b6', padding: 10, borderRadius: 6 }}
          onPress={() => setIsAddLanding(true)}
        >
          <FontAwesomeIcon color='#fff' icon={faPlus} />
        </Pressable>
      </View>
      <Search value={search} handleSearch={handleSearch} />
      <View style={homeStyle.landingList}>
        {loadingLanding ? (
          <ActivityIndicator size='small' color='#1d80b6' />
        ) : loadedLanding && landingList.length === 0 ? (
          <Text style={{ textAlign: 'center' }}>Không có dữ liệu</Text>
        ) : (
          landingList.map((item) => <LandingItem key={item.id} {...item} />)
        )}
      </View>
      <AddLanding close={() => setIsAddLanding(false)} visible={isAddLanding} brandId={currentUser.brand_id} />
    </SafeAreaView>
  );
};
const homeStyle = StyleSheet.create({
  bg: {
    paddingHorizontal: 15,
    backgroundColor: '#f7f7f7',
    height: '100%',
    paddingTop: 50,
  },
  header: {
    marginVertical: 30,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
  },
  desc: {
    fontSize: 14,
  },
  landingList: {
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
export default Home;
