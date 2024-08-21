import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";
import { ToDo } from "../../types/types";
import { LinearGradient } from "expo-linear-gradient";
import AppHeader from "../AppHeader/AppHeader";
import AddTodoForm from "../AddTodoForm.ts/AddTodoForm";
import * as Crypto from "expo-crypto";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const toggleTaskStatus = (id: string) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodo);
  };

  const handleDeleteTask = (id: string) => {
    const updatedTodos = todos.filter((task) => task.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (input: string) => {
    if (input.trim()) {
      const newTask: ToDo = {
        id: Crypto.randomUUID(),
        description: input,
        isCompleted: false,
      };

      setTodos((previousValue) => [...previousValue, newTask]);
    }
  };

  return (
    <LinearGradient
      colors={["#E3F4FF", "#C7D7EE", "#A0B8E0", "#6F87C8"]}
      style={{ flex: 1 }}
    >
      <AppHeader />
      <View style={styles.container}>
        <AddTodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTaskStatus={toggleTaskStatus}
          handleDeleteTask={handleDeleteTask}
        />
      </View>
    </LinearGradient>
  );
};

export default TodoApp;
