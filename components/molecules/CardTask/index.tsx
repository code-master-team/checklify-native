import CustomText from "@/components/atoms/CustomText"
import TagCategory from "@/components/atoms/Tag/TagCategory"
import TagPriority from "@/components/atoms/Tag/TagPriority"
import { useThemeColor } from "@/hooks/useThemeColor"
import { StyleSheet, View } from "react-native"

export default function CardTask() {
  const backgroundColor = useThemeColor("backgroundSecondary")

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.circle}></View>

      <View style={{ flex: 1 }}>
        <CustomText size="large">Do Math Homework</CustomText>

        <View style={styles.info}>
          <CustomText>Today At 16:45</CustomText>

          <View style={styles.tags}>
            <TagCategory category="university" />
            <TagPriority priority={1} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 6,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    borderColor: "#fff",
    borderWidth: 2,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tags: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
})
