import { styles } from "@/components/molecules/TabBar/styles"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { Text, Touchable, TouchableOpacity, View } from "react-native"
import TabItemBtn from "@/components/atoms/TabItemBtn"
import { PlusIcon } from "@/assets/icons"
import { router } from "expo-router"

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
      <TouchableOpacity
        onPress={() => router.push("/create_task")}
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translate(-50%, -50%)",
          height: 64,
          width: 64,
          borderRadius: "50%",
          backgroundColor: "#8687E7",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlusIcon />
      </TouchableOpacity>
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
