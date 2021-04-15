import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import CategoryModal from '../../components/CategoryModal';
import ICategory from '../../interfaces/Category';
import styles from './style';

interface NewEntryCategoryPickerProps {
  debit: number;
  category: ICategory;
  onChangeCategory: React.Dispatch<React.SetStateAction<ICategory>>;
}

const NewEntryCategoryPicker: React.FC<NewEntryCategoryPickerProps> = ({
  debit,
  category,
  onChangeCategory,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleCategoryPress = useCallback(
    item => {
      onChangeCategory(item);
      handleCloseModal();
    },
    [handleCloseModal, onChangeCategory],
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setShowModal(true)}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>

      <CategoryModal
        categoryType={debit === -1 ? 'debit' : 'credit'}
        isVisible={showModal}
        onConfirm={handleCategoryPress}
        onCancel={handleCloseModal}
      />
    </View>
  );
};

export default NewEntryCategoryPicker;
