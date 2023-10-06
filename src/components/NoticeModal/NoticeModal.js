import React from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import noticeModalStyle from "./noticeModalStyle";
import { LinearGradient } from "expo-linear-gradient";

const NoticeModal = ({ action, close, isNotice, content, visible }) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={noticeModalStyle.bg}>
        <View style={noticeModalStyle.box}>
          <LinearGradient
            style={noticeModalStyle.header}
            colors={["#3481aa", "#489bc7"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0.7, y: 0.1 }}
          >
            <Text style={noticeModalStyle.title}>Thông báo</Text>
          </LinearGradient>
          <Text style={noticeModalStyle.content}>{content}</Text>
          <View style={noticeModalStyle.control}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={noticeModalStyle.btn}
              onPress={isNotice ? close : action}
            >
              <Text style={noticeModalStyle.textBtn}>Đồng ý</Text>
            </TouchableOpacity>
            {isNotice && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={noticeModalStyle.btn}
                onPress={close}
              >
                <Text style={noticeModalStyle.textBtn}>Hủy bỏ</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NoticeModal;
