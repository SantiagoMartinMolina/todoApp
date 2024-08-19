import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import TodoApp from "../TodoApp/TodoApp";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainComponent = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <TodoApp />
    </SafeAreaView>
  );
};

export default MainComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
