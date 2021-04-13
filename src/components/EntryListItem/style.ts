import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {},
  description: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsIcon: {
    marginTop: 1,
    marginRight: 2,
    color: Colors.metal,
  },
  detailsText: {
    fontSize: 12,
    color: Colors.metal,
    marginRight: 5,
  },
  amount: {},
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
