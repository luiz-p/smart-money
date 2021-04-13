import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  debitButton: {
    flexDirection: 'row',
    padding: 20,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.white,
    minWidth: 8,
  },
  input: {
    flex: 1,
    fontSize: 28,
    color: Colors.white,
    textAlign: 'right',
    paddingRight: 20,
  },
});
