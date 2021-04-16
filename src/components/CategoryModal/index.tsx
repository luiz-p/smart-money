import React from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';

import useCategories from '../../hooks/useCategories';
import ICategory from '../../interfaces/Category';

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
  const [debitCategories, creditCategories, allCategories] = useCategories();

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={
            categoryType === 'all'
              ? allCategories
              : categoryType === 'debit'
              ? debitCategories
              : creditCategories
          }
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
