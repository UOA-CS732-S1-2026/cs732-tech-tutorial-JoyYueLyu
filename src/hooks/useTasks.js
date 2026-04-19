import { useState, useEffect } from 'react';
//storage
//localStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useTasks = () => {
  
  // task list
  const [tasks, setTasks] = useState([]);
  // Has it finished loading from local storage?
  const [isReady, setIsReady] = useState(false);

  // Load data from local storage
  useEffect(() => {
    const loadData = async () => {
      try {
        //Retrieve data locally
        const saved = await AsyncStorage.getItem('MY_TASKS');
        if (saved) setTasks(JSON.parse(saved));
      } catch (e) {
        console.error("Data loading failed", e);
      } finally {
        setIsReady(true);
      }
    };
    loadData();
  }, []);

  // Automatically save when tasks change.
  //Execute each time tasks change
  useEffect(() => {
    if (isReady) {
      // storage
      AsyncStorage.setItem('MY_TASKS', JSON.stringify(tasks));
    }
  }, [tasks, isReady]);

  // add test 
  const addTask = (text) => {
    const newTask = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      text,
      status: 'active'
    };
    setTasks(prev => [...prev, newTask]);
  };

  // delete test
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // Mark task as completed  
  const markDone = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: 'done' } : t));
  };

  // Clearing complete
  const clearCompleted = () => {
    setTasks(prev => prev.filter(t => t.status !== 'done'));
  };

  return { tasks, isReady, addTask, deleteTask, markDone, clearCompleted };
};