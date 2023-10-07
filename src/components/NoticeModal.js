import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const NoticeModal = ({ action, close, isNotice, content, visible }) => {
  return (
    <Modal animationType='fade' transparent={true} visible={visible}>
      <View style={noticeModalStyle.bg}>
        <View style={noticeModalStyle.box}>
          <LinearGradient
            style={noticeModalStyle.header}
            colors={['#3481aa', '#489bc7']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0.7, y: 0.1 }}
          >
            <Text style={noticeModalStyle.title}>Thông báo</Text>
          </LinearGradient>
          <Text style={noticeModalStyle.content}>{content}</Text>
          <View style={noticeModalStyle.control}>
            <TouchableOpacity activeOpacity={0.8} style={noticeModalStyle.btn} onPress={!isNotice ? close : action}>
              <Text style={noticeModalStyle.textBtn}>Đồng ý</Text>
            </TouchableOpacity>
            {isNotice && (
              <TouchableOpacity activeOpacity={0.8} style={noticeModalStyle.btn} onPress={close}>
                <Text style={noticeModalStyle.textBtn}>Hủy bỏ</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const noticeModalStyle = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
    paddingBottom: 20,
  },
  header: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21,
  },
  content: {
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  btn: {
    backgroundColor: '#3481aa',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 12,
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
  },
});
export default NoticeModal;
