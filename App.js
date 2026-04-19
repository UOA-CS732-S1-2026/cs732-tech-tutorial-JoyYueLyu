import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { useTasks } from './src/hooks/useTasks';

export default function App() {
  // 调用自定义 Hook 拿到所有状态和方法
  const taskHooks = useTasks();

  if (!taskHooks.isReady) return null; // 加载中显示空白

  // 将所有方法打包传给导航器
  return <AppNavigator {...taskHooks} />;
}