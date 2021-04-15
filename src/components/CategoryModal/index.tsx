import React, {useEffect, useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';

import ICategory from '../../interfaces/Category';
import {
  getCreditCategories,
  getDebitCategories,
  getAllCategories,
} from '../../services/Categories';
import styles from './style';

interface CategoryModalProps {
  categoryType: 'all' | 'debit' | 'credit';
  isVisible: boolean;
  onConfirm: (item: ICategory) => void;
  onCancel: () => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  categoryType,
  isVisible,
  onConfirm,
  onCancel,
}) => {
  const [categories, setCategories] = useState<
    Realm.Results<ICategory & Realm.Object> | []
  >([]);

  useEffect(() => {
    (async () => {
      let data;

      if (categoryType === 'all') {
        data = await getAllCategories();
      }

      if (categoryType === 'debit') {
        data = await getDebitCategories();
      }

      if (categoryType === 'credit') {
        data = await getCreditCategories();
      }

      if (data) {
        setCategories(data);
      }
    })();
  }, [categoryType]);

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}>
              <Text style={[styles.modalItemText, {color: item.color}]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CategoryModal;
