// src/screens/TodoScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/todoSlice';

const TodoScreen = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        placeholder="Enter a todo"
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
      <Text style={styles.listTitle}>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.todoItem}
            onPress={() => dispatch(toggleTodo(item.id))}
            onLongPress={() => dispatch(removeTodo(item.id))}
          >
            <Text style={[styles.todoText, item.completed && styles.todoTextCompleted]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  todoItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  todoTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

export default TodoScreen;
