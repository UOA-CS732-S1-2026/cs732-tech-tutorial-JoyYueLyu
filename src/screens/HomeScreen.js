import React from 'react';

// 1. ui components
import { View, FlatList, StyleSheet } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({ tasks, onAdd, onDelete, onDone }) {
  const activeTasks = tasks.filter(t => t.status === 'active');

  return (
    //1.
    // React Web
    //<div style={{ padding: 20 }}>
        //<p> something </p>
    //</div>
    <View style={styles.container}>
      <TaskInput onAdd={onAdd} />
      <FlatList
        data={activeTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCard task={item} onDelete={onDelete} onDone={onDone} />
        )}
      />
    </View>
  );
}
//2.Styling
// div className={styles.container}>
// .container {
//   display: flex;
//   flex: 1;
//   padding: 20px;
//   background-color: #f8f9fa;
//   min-height: 100vh;
// }

//<View style={styles.container}>
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' }
});