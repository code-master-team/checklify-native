import TabBar from "@/components/molecules/TabBar"
import { Tabs } from "expo-router"

export default function AppLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="calendar" />
      <Tabs.Screen name="focus" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}
