import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function CompletedScreen({ tasks, onClear }) {
  const completed = tasks.filter(t => t.status === 'done');

  return (
    <View style={styles.container}>
      <FlatList
        data={completed}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.doneCard}>
            <Text style={styles.doneText}>{item.text}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Empty</Text>}
      />
      {completed.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={onClear}>
          <Text style={styles.clearBtnText}>Clear completed records</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  doneCard: { padding: 15, backgroundColor: '#eee', marginBottom: 10, borderRadius: 8 },
  doneText: { color: '#999', textDecorationLine: 'line-through' },
  empty: { textAlign: 'center', marginTop: 50, color: '#ccc' },
  clearBtn: { padding: 15, backgroundColor: '#ffeded', borderRadius: 8, alignItems: 'center' },
  clearBtnText: { color: '#ff4d4d', fontWeight: 'bold' }
});