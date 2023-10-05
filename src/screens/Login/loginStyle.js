import { StyleSheet } from 'react-native';

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
export default loginStyle;
