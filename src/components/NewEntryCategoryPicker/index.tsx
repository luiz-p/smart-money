import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';

import {
  getDebitCategories,
  getCreditCategories,
} from '../../services/Categories';
import styles from './style';

interface NewEntryCategoryPickerProps {
  debit: any;
  category: any;
  onChangeCategory: () => void;
}

const NewEntryCategoryPicker: React.FC<NewEntryCategoryPickerProps> = ({
  debit,
  category,
  onChangeCategory,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState<
    Realm.Results<Realm.Object> | []
  >([]);

  useEffect(() => {
    (async () => {
      let data;

      if (debit <= 0) {
        data = await getDebitCategories();
      } else {
        data = await getCreditCategories();
      }

      setCategories(data);
    })();
  }, [debit]);

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

      <Modal animationType="slide" transparent={false} visible={showModal}>
        <View style={styles.modal}>
          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => handleCategoryPress(item)}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default NewEntryCategoryPicker;
