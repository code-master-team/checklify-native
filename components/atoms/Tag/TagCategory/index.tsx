import CustomText from "@/components/atoms/CustomText"
import { categories } from "@/data/categories"
import { StyleSheet, View } from "react-native"

interface TagCategoryProps {
  category: keyof typeof categories
}

export default function TagCategory(props: TagCategoryProps) {
  const { category } = props

  const Icon = categories[category].icon
  const backgroundColor = categories[category].color
  const name = categories[category].name

  return (
    <View style={[styles.tag, { backgroundColor }]}>
      <Icon size={14} />
      <CustomText size="small">{name}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    height: 30,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
})
