import { styles } from "@/components/molecules/TabBar/styles"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import TabItemBtn from "@/components/atoms/TabItemBtn"

interface TabBarProps {
  state: BottomTabBarProps["state"]
  descriptors: BottomTabBarProps["descriptors"]
  navigation: BottomTabBarProps["navigation"]
}

export default function TabBar({
  state,
  descriptors,
  navigation,
}: TabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        if (["_sitemap", "+not-found"].includes(route.name)) return null

        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }

        return (
          <TabItemBtn
            key={route.name}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label as string}
            routeName={route.name}
          />
        )
      })}
    </View>
  )
}
