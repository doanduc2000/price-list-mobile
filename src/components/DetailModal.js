import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
const DetailModal = ({ visible, close, detail }) => {
  return (
    <Modal animationType='slide' transparent={true} visible={visible}>
      <View style={style.container}>
        <View style={style.header}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <FontAwesomeIcon icon={faCircleInfo} size={20} />
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Chi Tiết</Text>
          </View>

          <Pressable onPress={close}>
            <FontAwesomeIcon icon={faXmark} size={20} />
          </Pressable>
        </View>
        <View style={style.main}>
          <View style={style.group}>
            <Text style={style.label}>Đường dẫn:</Text>
            <Text style={style.content}>{detail.url}</Text>
          </View>
          <View style={style.group}>
            <Text style={style.label}>Nhóm:</Text>
            <Text style={style.content}>{detail.category.category}</Text>
          </View>
          <View style={style.group}>
            <Text style={style.label}>Trạng thái:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={style.content}>{detail.status ? 'Đang hoạt động' : 'Vô hiệu hóa'}</Text>
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 20,
                  backgroundColor: detail.status ? 'green' : 'red',
                }}
              ></View>
            </View>
          </View>
        </View>
        <Pressable
          style={{
            borderRadius: 8,
            backgroundColor: '#1d80b6',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#1d80b6',
            paddingVertical: 7,
            marginBottom: 15,
          }}
        >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15 }}>Xem bảng giá</Text>
        </Pressable>
        <Pressable
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'red',
            paddingVertical: 7,
          }}
        >
          <Text style={{ textAlign: 'center', color: 'red', fontSize: 15 }}>Xóa landing page</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  main: {
    gap: 15,
    marginBottom: 25,
  },
  group: { gap: 5 },
  label: { fontWeight: '600', fontSize: 16 },
  content: { fontStyle: 'italic' },
});
export default DetailModal;
