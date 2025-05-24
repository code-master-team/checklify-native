import { NavigationEnum } from "@/app/types/navigation.types"
import CustomText from "@/components/atoms/CustomText"
import { Title } from "@/components/atoms/Title"
import TabBar from "@/components/molecules/TabBar"
import { useThemeColor } from "@/hooks/useThemeColor"
import { Tabs, useRouter } from "expo-router"
import { Pressable } from "react-native"

export default function TabsLayout() {
  const backgroundColor = useThemeColor("background")
  const router = useRouter()

  return (
    <Tabs
      screenOptions={{
        headerTitle: ({ children }) => <Title level={2}>{children}</Title>,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: backgroundColor,
          flex: 1,
          height: 70,
          shadowColor: "transparent",
          borderBottomWidth: 0,
        },
        headerLeftContainerStyle: {
          paddingLeft: 24,
        },
        headerRightContainerStyle: {
          paddingRight: 24,
        },
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name={NavigationEnum.HOME}
        options={{
          title: "Home",
          headerLeft: () => <CustomText>LeftBtn</CustomText>,
          headerRight: () => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: `/${NavigationEnum.PROFILE}`,
                })
              }
            >
              <CustomText>RightBtn</CustomText>
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name={NavigationEnum.CALENDAR}
        options={{
          title: "Calendar",
        }}
      />
      <Tabs.Screen
        name={NavigationEnum.FOCUS}
        options={{
          title: "Focus",
        }}
      />
      <Tabs.Screen
        name={NavigationEnum.PROFILE}
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  )
}
