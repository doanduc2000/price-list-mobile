import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";

const Loading = ({ visible }) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255,0.5)",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ActivityIndicator size="large" color="#1d80b6" />
      </View>
    </Modal>
  );
};

export default Loading;
