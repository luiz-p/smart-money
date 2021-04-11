import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import EntryListItem from '../EntryListItem';

interface EntryListProps {
  entries: {
    key: string;
    description: string;
    amount: number;
  }[];
}

const EntryList: React.FC<EntryListProps> = ({entries}) => {
  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text>
            {item.description}: R${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
