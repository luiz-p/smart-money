import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';

import IEntry from '../../interfaces/Entry';
import Colors from '../../utils/Colors';

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
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry?.category?.color || Colors.blue;

  return (
    <View>
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
  );
};

const styles = StyleSheet.create({});

export default EntryListItem;
