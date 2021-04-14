import React, {useEffect, useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';

import {getAllCategories} from '../../services/Categories';
import styles from './style';

const NewEntryCategoryPicker: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [allCategories, setAllCategories] = useState<
    Realm.Results<Realm.Object> | []
  >([]);

  useEffect(() => {
    (async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    })();
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setShowModal(true)}>
        <Text style={styles.pickerButtonText}>Educação</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={false} visible={showModal}>
        <View style={styles.modal}>
          <FlatList
            data={allCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default NewEntryCategoryPicker;
