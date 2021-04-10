import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
  },
});

export default Main;
