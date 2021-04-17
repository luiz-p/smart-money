import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import Colors from '../../utils/Colors';

const BalancePanelChart: React.FC = () => {
  const data = [100, 80, 30, 120, 10, 35, 100, 10, 100, 10, 100, 10];

  return (
    <View style={styles.container}>
      <LineChart
        style={styles.chart}
        data={data}
        svg={{stroke: Colors.blueChart}}
        contentInset={{top: 0, bottom: 20}}>
        {/* <Grid /> */}
      </LineChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  chart: {
    height: 60,
  },
});

export default BalancePanelChart;
