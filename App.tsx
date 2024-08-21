import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
// import TodoApp from "./src/components/TodoApp/TodoApp";
import {
  SafeAreaProvider,
  SafeAreaProviderProps,
} from "react-native-safe-area-context";
import MainComponent from "./src/components/MainComponent/MainComponent";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <MainComponent />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
