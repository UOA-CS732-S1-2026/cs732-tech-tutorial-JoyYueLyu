import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { useTasks } from './src/hooks/useTasks';

export default function App() {
  // Call a custom Hook to get all states and methods
  const taskHooks = useTasks();

  if (!taskHooks.isReady) return null; 

  // Package all methods and pass them to the navigation.
  return <AppNavigator {...taskHooks} />;
}