import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Picker} from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import styles from './style';

const Report: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" value={''} />
          <Picker.Item label="1" value={''} />
          <Picker.Item label="2" value={''} />
          <Picker.Item label="3" value={''} />
        </Picker>

        <Picker>
          <Picker.Item label="Últimos 7 dias" value={''} />
          <Picker.Item label="Últimos 15 dias" value={''} />
          <Picker.Item label="Últimos 21 dias" value={''} />
        </Picker>
      </View>

      <EntrySummary />

      <View style={styles.entryList}>
        <EntryList />
      </View>

      <View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Report;
