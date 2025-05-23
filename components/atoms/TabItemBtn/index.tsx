import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { icons } from "@/components/atoms/TabItemBtn/icons"

interface ITabItemBtn {
  label: string
  isFocused: boolean
  onPress: () => void
  onLongPress: () => void
  routeName: string
}

export default function TabItemBtn(props: ITabItemBtn) {
  const { label, isFocused, onPress, onLongPress, routeName } = props

  return (
    <TouchableOpacity
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={label}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        ...styles.tabBarItem,
        ...(routeName === "calendar" && { marginRight: 80 }),
      }}
    >
      {icons[routeName]({
        isFocused,
      })}
      <Text style={styles.tabBarItemText}>{label}</Text>
    </TouchableOpacity>
  )
}
