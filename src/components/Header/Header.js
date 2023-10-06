import React, { useState } from "react";
import headerStyle from "./headerStyle";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import authSlice, {
  currentUserSelector,
  loadedAuthSelector
} from "../../features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import NoticeModal from "../NoticeModal/NoticeModal";
const Header = () => {
  const dispatch = useDispatch();
  const [isLogout, setIsLogout] = useState(false);
  const currentUser = useSelector(currentUserSelector);
  const loadedUser = useSelector(loadedAuthSelector);

  return (
    <View style={headerStyle.container}>
      {loadedUser && (
        <View style={headerStyle.user}>
          <View style={headerStyle.avatarBox}>
            <Text style={headerStyle.avatar}>
              {currentUser.name.split("")[0]}
            </Text>
          </View>
          <View>
            <Text style={headerStyle.name}>{currentUser.name}</Text>
            <Text style={headerStyle.brand}>{currentUser.brand.name}</Text>
          </View>
        </View>
      )}
      <Pressable
        style={headerStyle.logoutBtn}
        onPress={() => {
          setIsLogout(true);
        }}
      >
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          size={20}
          color="#aaa"
        />
      </Pressable>
      <NoticeModal
        isNotice={true}
        visible={isLogout}
        content={"Bạn có muốn đăng xuất không ?"}
        action={() => {
          dispatch(authSlice.actions.logout());
          setIsLogout(false);
        }}
        close={() => {
          setIsLogout(false);
        }}
      />
    </View>
  );
};

export default Header;
