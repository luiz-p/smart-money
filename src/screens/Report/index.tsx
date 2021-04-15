import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import CategoryModal from '../../components/CategoryModal';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import ICategory from '../../interfaces/Category';
import Colors from '../../utils/Colors';
import styles from './style';

const Report: React.FC = () => {
  const navigation = useNavigation();

  const [showDaysModal, setShowDaysModal] = useState(false);
  const [showCategoriesModal, setShowCategoriesModal] = useState(false);
  const [relativeDays, setRelativeDays] = useState<number>(7);
  const [category, setCategory] = useState<ICategory>({
    id: null,
    name: 'Todas Categorias',
  });

  const onCloseModal = useCallback(() => {
    setShowDaysModal(false);
  }, []);

  const onCloseCategoryModal = useCallback(() => {
    setShowCategoriesModal(false);
  }, []);

  const onCategoryPress = useCallback(
    item => {
      setCategory(item);
      onCloseCategoryModal();
    },
    [onCloseCategoryModal],
  );

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

      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowDaysModal(true)}>
          <Text style={styles.filterButtonText}>
            {relativeDays === 1 ? 'Último dia' : `Últimos ${relativeDays} dias`}
          </Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowCategoriesModal(true)}>
          <Text style={styles.filterButtonText}>{category.name}</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>

        <RelativeDaysModal
          isVisible={showDaysModal}
          onConfirm={onModalItemPress}
          onCancel={onCloseModal}
        />

        <CategoryModal
          categoryType="all"
          isVisible={showCategoriesModal}
          onConfirm={onCategoryPress}
          onCancel={onCloseCategoryModal}
        />
      </View>

      <EntrySummary />

      <View style={styles.entryList}>
        <EntryList days={relativeDays} category={category} />
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
