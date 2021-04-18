import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import Colors from '../../utils/Colors';
import useBalanceSumByDate from '../../hooks/useBalanceSumByDate';

const BalancePanelChart: React.FC = () => {
  const [balanceSum] = useBalanceSumByDate();

  return (
    <View style={styles.container}>
      <LineChart
        style={styles.chart}
        data={balanceSum}
        svg={{stroke: Colors.blueChart}}
        contentInset={{top: 0, bottom: 20}}
      />
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
