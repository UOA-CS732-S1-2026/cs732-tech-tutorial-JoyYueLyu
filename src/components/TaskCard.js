import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  PanResponder, 
  Dimensions 
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function TaskCard({ task, onDelete, onDone }) {
  // 1. Initialize animation values: used to control the card's movement.
  const position = useRef(new Animated.ValueXY()).current;

  // 2. Create a gesture responder
  const panResponder = useRef(
    PanResponder.create({
      // Does it respond when the finger moves?
      onMoveShouldSetPanResponder: () => true,
      
      //The card follows the finger's X-axis movement.
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: 0 });
      },
      
      //The logic of releasing fingers
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 120) {
          // the right swipe distance exceeds 120 pixels
          // mark it as complete.
          forceExit('right', () => onDone(task.id));
        } else if (gesture.dx < -120) {
          // left delete
          forceExit('left', () => onDelete(task.id));
        } else {
          // Insufficient sliding distance: bounces back to its original position
          resetPosition();
        }
      },
    })
  ).current;

  // Make the card fly off the screen
  const forceExit = (direction, callback) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 250,
      useNativeDriver: false, 
    }).start(() => callback());
  };

  // rebound
  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  // 3. Change color and rotation angle according to displacement distance.
  const cardStyle = {
    transform: [
      { translateX: position.x },
      {
        rotate: position.x.interpolate({
          inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
          outputRange: ['-10deg', '0deg', '10deg'],
        }),
      },
    ],
    backgroundColor: position.x.interpolate({
      inputRange: [-150, 0, 150],
      outputRange: ['#ffcccc', '#ffffff', '#e6ffed'], // 左滑变红，右滑变绿
    }),
  };

  return (
    <Animated.View
      style={[styles.card, cardStyle]}
      {...panResponder.panHandlers}
    >
      <Text style={styles.text}>{task.text}</Text>
      <View style={styles.hintContainer}>
        <Text style={styles.hintText}>← delete | finish →</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  hintContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  hintText: {
    fontSize: 10,
    color: '#bbb',
    textTransform: 'uppercase',
  },
});