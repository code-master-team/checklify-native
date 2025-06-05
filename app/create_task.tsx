import AddTask from "@/components/molecules/AddTask"
import { router, Stack } from "expo-router"
import { Pressable, StyleSheet } from "react-native"

export default function CreateTask() {
  return (
    <Pressable onPress={() => router.back()} style={styles.container}>
      <Stack.Screen
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
      <Pressable onPress={(e) => e.stopPropagation()}>
        <AddTask />
      </Pressable>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
})
