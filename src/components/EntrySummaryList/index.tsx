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
});

export default EntrySummaryList;
