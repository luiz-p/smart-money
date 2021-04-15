import React, {useCallback} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import IEntry from '../../interfaces/Entry';
import Colors from '../../utils/Colors';
import styles from './style';

interface NewEntryDeleteActionProps {
  entry: IEntry;
  onOkPress: () => void;
}

const NewEntryDeleteAction: React.FC<NewEntryDeleteActionProps> = ({
  entry,
  onOkPress,
}) => {
  const handleDelete = useCallback(() => {
    Alert.alert(
      'Apagar!',
      'Você realmente deseja apagar este lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOkPress()},
      ],
      {cancelable: false},
    );
  }, [onOkPress]);

  return (
    <View>
      {entry.id && (
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Icon name="delete" size={30} color={Colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NewEntryDeleteAction;
