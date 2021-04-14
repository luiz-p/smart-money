import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Modal} from 'react-native';

import styles from './style';

const NewEntryCategoryPicker: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setShowModal(true)}>
        <Text style={styles.pickerButtonText}>Educação</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={false} visible={showModal}>
        <TouchableOpacity onPress={() => setShowModal(false)}>
          <Text>Fechar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default NewEntryCategoryPicker;
