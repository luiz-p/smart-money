import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {},
  panel: {
    paddingVertical: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: Colors.green,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: -25,
    marginRight: 10,

    shadowColor: Colors.black,
    elevation: 5,
  },
});
