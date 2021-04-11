import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

interface EntrySummaryListProps {
  entriesGrouped: {
    key: string;
    description: string;
    amount: number;
  }[];
}

const EntrySummaryList: React.FC<EntrySummaryListProps> = ({
  entriesGrouped,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            {item.description} - R${item.amount}
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

export default EntrySummaryList;
