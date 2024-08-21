import { Text, FlatList, View, Pressable } from "react-native";
import React from "react";
import { ToDo } from "../../types/types";
import { FontAwesome } from "@expo/vector-icons";
import TodoItem from "../TodoItem/TodoItem";

interface Props {
  todos: ToDo[];
  toggleTaskStatus: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

const TodoList = ({ todos, handleDeleteTask, toggleTaskStatus }: Props) => {
  const renderItem = ({ item }: { item: ToDo }) => {
    return (
      <TodoItem
        onDelete={handleDeleteTask}
        onToggle={toggleTaskStatus}
        item={item}
      />
    );
  };
  return (
    <FlatList
      data={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={renderItem}
    />
  );
};

export default TodoList;
