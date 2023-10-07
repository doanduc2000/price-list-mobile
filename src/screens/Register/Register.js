import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import registerStyle from "./registerStyle";
import HeaderAuth from "../../components/HeaderAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../../features/brand/brandApi";
import {
  brandListSelector,
  loadedBrandSelector,
  loadingBrandSelector
} from "../../features/brand/brandSlice";
import Loading from "../../components/Loading";
import NoticeModal from "../../components/NoticeModal";
import {
  errorRegisterSelector,
  loadedRegisterSelector,
  loadingRegisterSelector
} from "../../features/auth/registerSlice";
import { registerApi } from "../../features/auth/authApi";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const brand = useSelector(brandListSelector);
  const loadedBrand = useSelector(loadedBrandSelector);
  const loadingBrand = useSelector(loadingBrandSelector);
  const loadedRegister = useSelector(loadedRegisterSelector);
  const loadingRegister = useSelector(loadingRegisterSelector);
  const errorRegister = useSelector(errorRegisterSelector);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    brand: "",
    password: "",
    retypePasword: ""
  });
  const handleRegister = () => {
    if (
      registerInfo.name === "" ||
      registerInfo.email === "" ||
      registerInfo.brand === "" ||
      registerInfo.password === "" ||
      registerInfo.retypePasword === ""
    ) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (registerInfo.password !== registerInfo.retypePasword) {
      Alert.alert("Thông báo", "Nhập lại mật khẩu không đúng");
      return;
    }

    dispatch(registerApi(registerInfo));
    setIsSuccess(true);
  };

  const handleInputChange = (key, value) => {
    switch (key) {
      case "name":
        setRegisterInfo({ ...registerInfo, name: value });
        break;
      case "email":
        setRegisterInfo({ ...registerInfo, email: value });
        break;
      case "brand":
        setRegisterInfo({ ...registerInfo, brand: value });
        break;
      case "password":
        setRegisterInfo({ ...registerInfo, password: value });
        break;
      case "retypePasword":
        setRegisterInfo({ ...registerInfo, retypePasword: value });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(fetchBrand());
  }, [dispatch]);
  return (
    <View style={registerStyle.bgAuth}>
      <HeaderAuth />
      <Loading visible={loadingBrand || loadingRegister} />
      {isSuccess && loadedRegister && (
        <NoticeModal
          content={"Đăng ký thành công"}
          isNotice={false}
          action={() => {
            navigation.navigate("Login");
            setRegisterInfo({
              name: "",
              email: "",
              brand: "",
              password: "",
              retypePasword: ""
            });
            setIsSuccess(false);
          }}
        />
      )}
      {isSuccess && errorRegister !== "" && (
        <NoticeModal
          content={errorRegister}
          isNotice={false}
          action={() => {
            setIsSuccess(false);
          }}
        />
      )}
      <View style={registerStyle.bgRegister}>
        <Text style={registerStyle.text}>Đăng Ký</Text>
        <View style={registerStyle.form}>
          <View style={registerStyle.inputGroup}>
            <Text style={registerStyle.inputTitle}>Họ và tên</Text>
            <TextInput
              style={registerStyle.input}
              value={registerInfo.name}
              onChangeText={(text) => handleInputChange("name", text)}
              placeholder="Nguyễn Văn A"
            />
          </View>
          <View style={registerStyle.inputGroup}>
            <Text style={registerStyle.inputTitle}>Email</Text>
            <TextInput
              style={registerStyle.input}
              placeholder="example@scigroup.com.vn"
              value={registerInfo.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
          </View>
          <View style={registerStyle.inputGroup}>
            <Text style={registerStyle.inputTitle}>Thương hiệu</Text>
            <View style={[registerStyle.input, { justifyContent: "center" }]}>
              <Picker
                style={{ height: 25, fontSize: 14 }}
                selectedValue={registerInfo.brand}
                onValueChange={(itemValue) =>
                  handleInputChange("brand", itemValue)
                }
              >
                <Picker.Item
                  style={{ fontSize: 14 }}
                  enabled={false}
                  label={"Chọn thương hiệu"}
                  value={""}
                />
                {loadedBrand &&
                  brand.map((item) => (
                    <Picker.Item
                      key={item.id}
                      style={{ fontSize: 14 }}
                      label={item.name}
                      value={item.id}
                    />
                  ))}
              </Picker>
            </View>
          </View>
          <View style={registerStyle.inputGroup}>
            <Text style={registerStyle.inputTitle}>Mật khẩu</Text>
            <TextInput
              secureTextEntry={true}
              style={registerStyle.input}
              placeholder="Nhập mật khẩu"
              value={registerInfo.password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
          </View>
          <View style={registerStyle.inputGroup}>
            <Text style={registerStyle.inputTitle}>Nhập lại mật khẩu</Text>
            <TextInput
              secureTextEntry={true}
              style={registerStyle.input}
              placeholder="Nhập lại mật khẩu"
              value={registerInfo.retypePasword}
              onChangeText={(text) => handleInputChange("retypePasword", text)}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleRegister}
            style={registerStyle.registerBtn}
          >
            <Text style={registerStyle.textBtn}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={registerStyle.linkBtn}
        >
          <Text style={registerStyle.linktext}>Quay lại trang đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
