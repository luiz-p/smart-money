import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  pickerButton: {
    alignItems: 'center',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
  },
  modalItem: {
    alignItems: 'center',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 14,
    color: Colors.green,
  },
});
