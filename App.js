// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'; // Sử dụng `default export` cho store
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
}
