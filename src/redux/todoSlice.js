// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // Thêm kiểm tra để đảm bảo action.payload là một chuỗi hợp lệ
      if (typeof action.payload === 'string' && action.payload.trim() !== '') {
        state.push({ id: Date.now(), text: action.payload.trim(), completed: false });
      }
    },
    toggleTodo: (state, action) => {
      // Tìm kiếm todo theo ID và kiểm tra sự tồn tại của todo
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      // Trả về một danh sách mới mà không chứa ID đã cho
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
