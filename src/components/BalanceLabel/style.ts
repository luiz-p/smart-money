import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: Colors.white,
  },
  panel: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
});
