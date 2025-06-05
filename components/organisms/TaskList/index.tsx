import CardTask from "@/components/molecules/CardTask"
import { useAppSelector } from "@/hooks/redux"
import { FlatList, StyleSheet, View } from "react-native"

export default function TaskList() {
  const tasks = useAppSelector((s) => s.tasks.data)

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <CardTask {...item} />}
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
    />
  )
}

const styles = StyleSheet.create({
  listContent: {
    paddingTop: 16,
    paddingBottom: 32,
  },
  separator: {
    height: 12,
  },
})
