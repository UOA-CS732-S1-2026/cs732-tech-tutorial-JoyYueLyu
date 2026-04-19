import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import CompletedScreen from '../screens/CompletedScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === 'Home' ? 'list' : 'checkmark-done';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" options={{ title: 'To-do tasks' }}>
          {() => <HomeScreen 
            //Send the task list to Home Page
            tasks={props.tasks} 
            //Pass a function
            onAdd={props.addTask} 
            onDelete={props.deleteTask} 
            onDone={props.markDone} 
          />}
        </Tab.Screen>
        
        <Tab.Screen name="Completed" options={{ title: 'Completed' }}>
          {() => <CompletedScreen 
            tasks={props.tasks} 
            onClear={props.clearCompleted} 
          />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}