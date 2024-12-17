import React, { useState } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';

interface PlayerMarkerProps {
  position: { x: number; y: number };
  color: string;
  onPositionChange?: (newPosition: { x: number; y: number }) => void;
}

export function PlayerMarker({ position, color, onPositionChange }: PlayerMarkerProps) {
  const [touchOffset, setTouchOffset] = useState({ x: 0, y: 0 });

  const handleTouchStart = (event: GestureResponderEvent) => {
    const touch = event.nativeEvent;
    setTouchOffset({
      x: touch.pageX - position.x,
      y: touch.pageY - position.y,
    });
  };

  const handleTouchMove = (event: GestureResponderEvent) => {
    const touch = event.nativeEvent;
    onPositionChange?.({
      x: touch.pageX - touchOffset.x,
      y: touch.pageY - touchOffset.y,
    });
  };

  return (
    <View
      style={[
        styles.marker,
        {
          left: position.x,
          top: position.y,
          backgroundColor: color,
          borderColor: color === '#ffffff' ? '#000000' : 'white',
        },
      ]}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    />
  );
}

const styles = StyleSheet.create({
  marker: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
}); 