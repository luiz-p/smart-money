import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import EntrySummaryChart from '../EntrySummaryChart';
import EntrySummaryList from '../EntrySummaryList';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EntrySummary: React.FC = () => {
  const entriesGrouped = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
    {key: '4', description: 'Teste', amount: 10},
    {key: '5', description: 'Teste mais caro', amount: 1990},
  ];

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
