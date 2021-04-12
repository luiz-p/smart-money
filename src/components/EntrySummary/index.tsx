import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import EntrySummaryChart from '../EntrySummaryChart';
import EntrySummaryList from '../EntrySummaryList';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
      <Text style={styles.title}>Categorias</Text>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />

      <View style={styles.actionContainer}>
        <Text style={styles.actionLabel}>Últimos 7 dias</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="insert-chart" style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EntrySummary;
