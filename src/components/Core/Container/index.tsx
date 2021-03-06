import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';

interface ContainerProps {
  title?: string;
  actionLabelText?: string;
  actionButtonText?: string;
  onPressActionButton?: () => void;
}

const Container: React.FC<ContainerProps> = ({
  title,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
  children,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      {children}

      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}

          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              <Icon name="insert-chart" style={styles.actionButtonIcon} />
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Container;
