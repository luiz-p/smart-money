import React from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';

interface RelativeDaysModalProps {
  isVisible: boolean;
  onConfirm: (item: number) => void;
  onCancel: () => void;
}

const RelativeDaysModal: React.FC<RelativeDaysModalProps> = ({
  isVisible,
  onConfirm,
  onCancel,
}) => {
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={relativeDays}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}>
              <Text style={styles.modalItemText}>
                {item} {item === 1 ? 'dia' : 'dias'}
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

export default RelativeDaysModal;
