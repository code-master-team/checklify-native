import { useThemeColor } from "@/hooks/useThemeColor"
import { ReactNode } from "react"
import { StyleProp, Text, TextStyle } from "react-native"
import { styles } from "./styles"

interface CustomTextProps {
  children: ReactNode
  style?: StyleProp<TextStyle>
  size?: "small" | "medium" | "large"
}

export default function CustomText(props: CustomTextProps) {
  const { children, style = {}, size = "medium" } = props
  const color = useThemeColor("text")

  const fontStyle: TextStyle = {
    color,
    fontFamily: "Lato, sans-serif",
    fontWeight: "normal",
  }

  return <Text style={[styles[size], fontStyle, style]}>{children}</Text>
}
