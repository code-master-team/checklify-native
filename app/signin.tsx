import CustomText from "@/components/atoms/CustomText"
import { Stack } from "expo-router"
import { View } from "react-native"

export default function Signin() {
  return (
    <View>
      <Stack.Screen options={{ presentation: "transparentModal" }} />
      <CustomText>ФЫФЫЫФЫФЫФЫФЫ</CustomText>
    </View>
  )
}
