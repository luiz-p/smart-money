import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import styles from './style';

interface NewEntryInputProps {
  value: number;
  onChangeDebit: React.Dispatch<React.SetStateAction<number>>;
  onChangeText?: ((text: number) => void) | undefined;
}

const NewEntryInput: React.FC<NewEntryInputProps> = ({
  value,
  onChangeDebit,
  onChangeText,
}) => {
  const [debit, setDebit] = useState(0);
  const [debitPrefix, setDebitPrefix] = useState('');

  useEffect(() => {
    value <= 0 ? setDebit(-1) : setDebit(1);
    value <= 0 ? setDebitPrefix('-') : setDebitPrefix('');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeDebit = useCallback(() => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit(1);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit(-1);
    }

    if (onChangeText) {
      onChangeText(value * -1);
    }
  }, [debit, onChangeDebit, onChangeText, value]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.debitButton} onPress={handleChangeDebit}>
        <Text style={styles.debitButtonText}>{debitPrefix}</Text>
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
        value={String(value)}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          if (onChangeText && rawValue) {
            let debitValue = Number(rawValue) * debit;
            onChangeText(debitValue);
          }
        }}
      />
    </View>
  );
};

export default NewEntryInput;
