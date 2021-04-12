import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

import Colors from '../../utils/Colors';
import BalancePanelChart from '../BalancePanelChart';
import BalancePanelLabel from '../BalancePanelLabel';
import styles from './style';

interface BalancePanelProps {
  currentBalance: number;
}

const BalancePanel: React.FC<BalancePanelProps> = () => {
  const navigation = useNavigation();

  const currentBalance = 2064.35;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NewEntry')}>
        <Icon name="add" size={32} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default BalancePanel;
