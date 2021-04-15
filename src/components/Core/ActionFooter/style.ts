import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    alignItems: 'center',
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    fontSize: 18,
    color: Colors.green,
  },
  secondaryButton: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    fontSize: 18,
    color: Colors.white,
  },
});
