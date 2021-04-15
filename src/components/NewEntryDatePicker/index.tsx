import React, {useCallback, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../utils/Colors';
import styles from './style';

interface NewEntryDatePickerProps {
  value: Date;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
}

const NewEntryDatePicker: React.FC<NewEntryDatePickerProps> = ({
  value,
  onChange,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onCancel = useCallback(() => {
    setShowModal(false);
  }, []);

  const onChangeValue = useCallback(
    (date: Date) => {
      onChange(date);
      onCancel();
    },
    [onCancel, onChange],
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setShowModal(true);
        }}>
        <Icon name="today" size={30} color={Colors.white} />
      </TouchableOpacity>

      <DateTimePicker
        mode="date"
        cancelTextIOS="Cancelar"
        confirmTextIOS="OK"
        date={value}
        isVisible={showModal}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </View>
  );
};

export default NewEntryDatePicker;
