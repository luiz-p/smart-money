import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: Colors.champagneDark,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  filterButtonText: {
    color: Colors.champagneDark,
  },
  entryList: {
    flex: 1,
    marginBottom: 42,
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
