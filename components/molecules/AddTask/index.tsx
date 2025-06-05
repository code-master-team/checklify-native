import { Title } from "@/components/atoms/Title"
import { useThemeColor } from "@/hooks/useThemeColor"
import { Dimensions, StyleSheet, TextInput, View } from "react-native"

const width = Dimensions.get("window").width

export default function AddTask() {
  const backgroundColor = useThemeColor("backgroundSecondary")

  return (
    <View style={[styles.container, { backgroundColor, width }]}>
      <Title level={3} style={styles.title}>
        Add Task
      </Title>
      <TextInput
        placeholder="Title"
        // autoFocus={true}
        keyboardType="default"
        returnKeyType="done"
      />
      <TextInput placeholder="Description" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    borderRadius: 16,
  },
  title: {},
})
