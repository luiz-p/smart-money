import React from 'react';
import {View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import styles from './style';

interface NewEntryInputProps {
  value: string;
  onChangeText?: (text: string) => void;
}

const NewEntryInput: React.FC<NewEntryInputProps> = ({value, onChangeText}) => {
  return (
    <View>
      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          if (onChangeText && rawValue) {
            onChangeText(rawValue);
          }
        }}
      />
    </View>
  );
};

export default NewEntryInput;
