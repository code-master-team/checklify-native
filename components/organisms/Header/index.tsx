import { StyleSheet, Text, View } from "react-native"
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function Header(
  props: BottomTabHeaderProps & { styles?: StyleSheet },
) {
  const { route } = props
  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.header, { marginTop: top + 10 }]}>
      <Text style={{ color: "black" }}>{route.name}</Text>
      <Text>asasasa</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 100,
  },
})
