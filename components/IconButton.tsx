import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  icon: string;
  position: 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  disabled?: boolean;
}

export function IconButton({ onPress, icon, position, disabled }: IconButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        styles[position],
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, disabled && styles.disabledText]}>{icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  topLeft: {
    left: 20,
    top: 20,
  },
  topRight: {
    right: 20,
    top: 20,
  },
  bottomLeft: {
    left: 20,
    bottom: 20,
  },
  bottomRight: {
    right: 20,
    bottom: 20,
  },
  left: {
    left: 20,
    bottom: 20,
  },
  right: {
    right: 20,
    bottom: 20,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#666',
  },
}); 