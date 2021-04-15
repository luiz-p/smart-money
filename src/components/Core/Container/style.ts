import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    margin: 5,
    borderRadius: 5,
    padding: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: {
    fontSize: 14,
    color: Colors.white,
    marginBottom: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    color: Colors.white,
    marginTop: 3,
    marginRight: 2,
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
  },
});
