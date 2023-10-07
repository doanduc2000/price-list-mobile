import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import landingItemStyle from "./LandingItemStyle";
import DetailModal from "../DetailModal/DetailModal";

const LandingItem = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <View>
      <Pressable
        onPress={() => {
          setIsOpenModal(!isOpenModal);
        }}
        style={landingItemStyle.container}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            width: "75%"
          }}
        >
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../../assets/parisIcon.webp")}
          />
          <View>
            <Text style={{ color: "#444", fontWeight: "600" }}>
              {props.category.category}
            </Text>
            <Text
              style={{ color: "#777", fontStyle: "italic" }}
              numberOfLines={1}
              ellipsizeMode="middle"
            >
              {props.url}
            </Text>
          </View>
        </View>
        <View
          style={[
            landingItemStyle.status,
            { backgroundColor: props.status ? "green" : "red" }
          ]}
        ></View>
      </Pressable>
      <DetailModal
        detail={props}
        visible={isOpenModal}
        close={() => {
          setIsOpenModal(!isOpenModal);
        }}
      />
    </View>
  );
};

export default LandingItem;
