import { FlagIcon } from "@/assets/icons/categories"
import CustomText from "@/components/atoms/CustomText"
import { Colors } from "@/constants/Colors"
import { StyleSheet, View } from "react-native"

interface TagCategoryProps {
  priority: number
}

export default function TagPriority(props: TagCategoryProps) {
  const { priority } = props

  return (
    <View style={styles.tag}>
      <FlagIcon />
      <CustomText>{priority}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    height: 30,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderRadius: 4,
    borderColor: Colors.primary,
    borderStyle: "solid",
    borderWidth: 1,
  },
})
