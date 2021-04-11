import React from 'react';
import {StyleSheet, View} from 'react-native';

import EntrySummaryChart from '../EntrySummaryChart';
import EntrySummaryList from '../EntrySummaryList';

interface EntrySumaryProps {
  entriesGrouped: {
    key: string;
    description: string;
    amount: number;
  }[];
}

const EntrySummary: React.FC<EntrySumaryProps> = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EntrySummary;
