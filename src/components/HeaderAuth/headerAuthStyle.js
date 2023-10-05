import { StyleSheet } from 'react-native';

const headerAuthStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
});
export default headerAuthStyle;
