import { FlatList, Pressable, View, Text, Alert } from "react-native";
import { useState } from "react";
import styles from "./styles";
import { ToDo } from "../../types/types";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AppHeader from "../AppHeader/AppHeader";
import { TextInput, Button } from "react-native-paper";
import AddTodoForm from "../AddTodoForm.ts/AddTodoForm";

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

  const renderItem = ({ item }: { item: ToDo }) => {
    return (
      <View style={[styles.itemContainer, styles.mb]}>
        <Pressable onPress={() => toggleTaskStatus(item.id)}>
          <Text style={[styles.taskText, item.isCompleted && styles.completed]}>
            {item.description}
          </Text>
        </Pressable>
        <Pressable onPress={() => handleDeleteTask(item.id)}>
          <FontAwesome name="trash" size={24} />
        </Pressable>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={["#E3F4FF", "#C7D7EE", "#A0B8E0", "#6F87C8"]}
      style={{ flex: 1 }}
    >
      <AppHeader />
      <View style={styles.container}>
        <AddTodoForm setTodos={setTodos} />
        <FlatList
          data={todos}
          keyExtractor={(todo) => todo.id}
          renderItem={renderItem}
        />
      </View>
    </LinearGradient>
  );
};

export default TodoApp;
