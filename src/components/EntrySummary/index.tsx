import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import EntrySummaryChart from '../EntrySummaryChart';
import EntrySummaryList from '../EntrySummaryList';

const EntrySummary: React.FC = () => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EntrySummary;
