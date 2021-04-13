import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

import IEntry from '../../interfaces/Entry';
import Colors from '../../utils/Colors';
import styles from './style';

interface EntryListItemProps {
  entry: IEntry;
  isFirstItem: boolean;
  isLastItem: boolean;
}

const EntryListItem: React.FC<EntryListItemProps> = ({
  entry,
  isFirstItem,
  isLastItem,
}) => {
  const navigation = useNavigation();

  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry?.category?.color || Colors.blue;

  return (
    <TouchableOpacity
      onPress={() => {
        console.log(typeof entry.entryAt === 'number');
        navigation.navigate('NewEntry', {entry});
      }}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}

            <Circle
              cx="10"
              cy="25"
              r={8}
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>

          <View style={styles.details}>
            <Icon style={styles.detailsIcon} name="access-time" size={12} />
            <Text style={styles.detailsText}>{entry.entryAt.toString()}</Text>

            {entry.address && (
              <>
                <Icon style={styles.detailsIcon} name="person-pin" size={12} />
                <Text style={styles.detailsText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>

        <View style={styles.amount}>
          <Text style={styles.amountText}>{entry.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EntryListItem;
