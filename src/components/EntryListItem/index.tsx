import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IEntry from '../../interfaces/Entry';

interface EntryListItemProps {
  entry: IEntry;
}

const EntryListItem: React.FC<EntryListItemProps> = ({entry}) => {
  return (
    <View>
      <Text>R${entry.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EntryListItem;
