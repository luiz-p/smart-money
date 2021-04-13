import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import styles from './style';

interface NewEntryInputProps {
  value: string;
  onChangeText?: (text: string) => void;
}

const NewEntryInput: React.FC<NewEntryInputProps> = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.debitButton}>
        <Text style={styles.debitButtonText}>-</Text>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>
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
