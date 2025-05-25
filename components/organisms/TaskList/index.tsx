import CardTask from "@/components/molecules/CardTask"
import { FlatList, ScrollView, StyleSheet, View } from "react-native"

export default function TaskList() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        data={[...new Array(16)]}
        renderItem={() => <CardTask />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
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
