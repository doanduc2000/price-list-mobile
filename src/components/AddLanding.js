import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesListSelector, loadedCategorySelector } from '../features/category/categorySlice';
import { fetchCategory } from '../features/category/categoryApi';
import landingSlice, { landingErrorSelector } from '../features/landing/landingSlice';
import { createLanding } from '../features/landing/landingApi';

const AddLanding = ({ visible, brandId, close }) => {
  const dispatch = useDispatch();
  const loadedCategory = useSelector(loadedCategorySelector);
  const categories = useSelector(categoriesListSelector);
  const errorData = useSelector(landingErrorSelector);
  const [errorClient, setErrorClient] = useState('');
  const [landing, setLanding] = useState({ url: '', category: '', status: true, brandId: brandId });

  const handleInputChange = (key, value) => {
    switch (key) {
      case 'url':
        setLanding({ ...landing, url: value });
        break;
      case 'category':
        setLanding({ ...landing, category: value });
        break;
      default:
        break;
    }
  };
  const saveLanding = () => {
    if (landing.url === '' || landing.category === '') {
      setErrorClient('Vui lòng nhập đủ thông tin');
      return;
    }
    setErrorClient('Thêm mới thành công');
    dispatch(createLanding(landing));
  };
  useEffect(() => {
    dispatch(fetchCategory(brandId));
  }, [dispatch]);
  return (
    <Modal animationType='fade' transparent={true} visible={visible}>
      <View style={style.bg}>
        <View style={style.box}>
          <Text style={{ marginBottom: 15, fontSize: 24 }}>Thêm mới</Text>
          <View style={{ gap: 10 }}>
            <TextInput
              style={style.input}
              placeholder='Nhập đường dẫn...'
              value={landing.url}
              onChangeText={(text) => handleInputChange('url', text)}
            />
            <View style={[style.input, { justifyContent: 'center' }]}>
              <Picker
                style={{ height: 25, fontSize: 14 }}
                selectedValue={landing.category}
                onValueChange={(itemValue) => handleInputChange('category', itemValue)}
              >
                <Picker.Item style={{ fontSize: 14 }} enabled={false} label={'Nhóm dịch vụ'} value={''} />
                {loadedCategory &&
                  categories.map((item) => (
                    <Picker.Item key={item.id} style={{ fontSize: 14 }} label={item.category} value={item.id} />
                  ))}
              </Picker>
            </View>
          </View>
          {errorClient !== '' && (
            <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{errorClient}</Text>
          )}
          {errorData !== '' && <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{errorData}</Text>}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>
            <Pressable
              style={style.actionBtn}
              onPress={() => {
                setErrorClient('');
                dispatch(landingSlice.actions.resetError());
                setLanding({ url: '', category: '', status: true, brandId: brandId });
                close();
              }}
            >
              <Text style={style.actionBtnText}>Huỷ</Text>
            </Pressable>
            <Pressable style={style.actionBtn} onPress={saveLanding}>
              <Text style={style.actionBtnText}>Tạo</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const style = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  actionBtn: {
    color: '#1d80b6',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  actionBtnText: {
    color: '#1d80b6',
    fontSize: 16,
  },
});
export default AddLanding;
