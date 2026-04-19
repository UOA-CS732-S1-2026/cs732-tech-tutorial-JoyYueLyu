import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      //use the method passed from the parent component
      onAdd(text); 
      // clear itself
      setText(''); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="add some test"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, marginRight: 10, backgroundColor: '#fff' },
  button: { backgroundColor: '#007AFF', justifyContent: 'center', paddingHorizontal: 20, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});