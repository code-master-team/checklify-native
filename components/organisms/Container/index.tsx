import { useThemeColor } from "@/hooks/useThemeColor"
import { ReactNode } from "react"
import { View } from "react-native"
import { styles } from "./styles"

interface ContainerProps {
  children: ReactNode
}

export default function Container(props: ContainerProps) {
  const { children } = props
  const backgroundColor = useThemeColor("background")

  return <View style={[styles.container, { backgroundColor }]}>{children}</View>
}
