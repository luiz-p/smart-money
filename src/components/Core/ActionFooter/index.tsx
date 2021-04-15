import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './style';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const ActionFooter: React.FC = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionFooter;
