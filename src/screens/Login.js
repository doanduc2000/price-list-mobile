import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import HeaderAuth from '../components/HeaderAuth';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../features/auth/authApi';
import { errorAuthSelector, loadingAuthSelector } from '../features/auth/authSlice';
import NoticeModal from '../components/NoticeModal';
import Loading from '../components/Loading';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ email: '', password: '' });

  const loadingLogin = useSelector(loadingAuthSelector);
  const errorLogin = useSelector(errorAuthSelector);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleInputLogin = (key, value) => {
    switch (key) {
      case 'email':
        setLogin({ ...login, email: value });
        break;
      case 'password':
        setLogin({ ...login, password: value });
        break;

      default:
        break;
    }
  };
  const handleLogin = () => {
    if (login.name === '' || login.email === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }
    dispatch(loginApi(login));
    setIsSuccess(true);
  };
  return (
    <View style={loginStyle.bgAuth}>
      <HeaderAuth />
      <Loading visible={loadingLogin} />

      <NoticeModal
        visible={isSuccess && errorLogin !== ''}
        content={errorLogin}
        isNotice={false}
        close={() => {
          setIsSuccess(false);
        }}
      />

      <View style={loginStyle.bgLogin}>
        <Text style={loginStyle.text}>Đăng nhập</Text>
        <View style={loginStyle.form}>
          <View style={loginStyle.inputGroup}>
            <Text style={loginStyle.inputTitle}>Email</Text>
            <TextInput
              style={loginStyle.input}
              value={login.email}
              onChangeText={(text) => handleInputLogin('email', text)}
              placeholder='example@scigroup.com.vn'
            />
          </View>
          <View style={loginStyle.inputGroup}>
            <Text style={loginStyle.inputTitle}>Mật khẩu</Text>
            <TextInput
              secureTextEntry={true}
              style={loginStyle.input}
              value={login.password}
              onChangeText={(text) => handleInputLogin('password', text)}
              placeholder='Mật khẩu của bạn'
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={handleLogin} style={loginStyle.loginBtn}>
            <Text style={loginStyle.textBtn}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={loginStyle.linkBtn}>
          <Text style={loginStyle.linktext}>Quên mật khẩu ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={loginStyle.linkBtn}
        >
          <Text style={loginStyle.linktext}>Đăng ký bằng SCI Email tại đây!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const loginStyle = StyleSheet.create({
  bgAuth: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgLogin: {
    width: '85%',
    marginTop: 24,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  form: {
    backgroundColor: '#f6f8fa',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d8dee4',
    padding: 16,
    fontSize: 14,
    borderRadius: 6,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputTitle: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d0d7de',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  loginBtn: {
    backgroundColor: '#1d80b6',
    borderRadius: 6,
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  textBtn: {
    color: '#fff',
    textAlign: 'center',
  },
  linkBtn: {
    marginTop: 16,
    borderRadius: 6,
    paddingVertical: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d0d7de',
  },
  linktext: {
    textAlign: 'center',
    color: '#216491',
  },
});
export default Login;
