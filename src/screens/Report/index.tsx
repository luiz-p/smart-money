import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Picker} from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import Colors from '../../utils/Colors';
import styles from './style';

const Report: React.FC = () => {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const [relativeDays, setRelativeDays] = useState<number>(7);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const onModalItemPress = useCallback(
    (item: number) => {
      setRelativeDays(item);
      onCloseModal();
    },
    [onCloseModal],
  );

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowModal(true)}>
          <Text style={styles.filterButtonText}>
            {relativeDays === 1 ? 'Último dia' : `Últimos ${relativeDays} dias`}
          </Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>

        <RelativeDaysModal
          isVisible={showModal}
          onConfirm={onModalItemPress}
          onCancel={onCloseModal}
        />
      </View>

      <EntrySummary />

      <View style={styles.entryList}>
        <EntryList days={relativeDays} />
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
