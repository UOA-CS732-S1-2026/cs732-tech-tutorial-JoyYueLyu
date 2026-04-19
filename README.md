# TaskFlow: Interactive React Native Task Manager

TaskFlow is a cross-platform mobile application built with **React Native** and **Expo**. This project explores mobile-specific gesture interactions and highlights the architectural differences between native mobile development and traditional React Web development.

---

## Overview

This project demonstrates how to build a cross-platform mobile application using React Native.

Users can:
- Add tasks
- Swipe right to mark tasks as completed
- Swipe left to delete tasks
- View completed tasks on a separate screen
- Persist data using AsyncStorage

## Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
```bash

# clone
git clone https://github.com/UOA-CS732-S1-2026/cs732-tech-tutorial-JoyYueLyu.git

cd cs732-tech-tutorial-JoyYueLyu
# Install dependencies (including native modules)
npm install

# start
npx expo start

# Running in a webpage
Press w

# Running on phone
Download the Expo Go app and scan the QR code.

```
## React vs React Native

| Feature | React (Web) | React Native |
|--------|------------|-------------|
| UI | HTML (div, button) | Native components (View, Text) |
| Styling | CSS | StyleSheet API |
| Rendering | DOM | Native rendering |
| Storage | localStorage | AsyncStorage |
| Interaction | Click events | Touch gestures |
| State Management | useState / Context / Redux | useState / Context / Redux |

## Project Structure
```
MyTodoApp/
├── App.js                   # Entry point of the application
└── src/                     # Source code root directory
├── components/              # Reusable components
│ ├── TaskCard.js            # Swipeable task card component
│ └── TaskInput.js           # Task input component
├── hooks/ # Custom hooks 
│ └── useTasks.js            # Core logic: state management & persistence
├── navigation/              # Navigation configuration
│ └── AppNavigator.js
└── screens/                 # Screen components
├── HomeScreen.js
└── CompletedScreen.js
```

