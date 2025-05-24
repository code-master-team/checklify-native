import { useThemeColor } from "@/hooks/useThemeColor"
import { StyleProp, Text, TextStyle } from "react-native"
import { styles } from "./styles"

interface TitleProps {
  children: string
  style?: StyleProp<TextStyle>
  level?: 1 | 2 | 3
  regular?: boolean
}

export function Title(props: TitleProps) {
  const { children, style = {}, level = 1, regular } = props
  const textColor = useThemeColor("text")

  const fontStyle: TextStyle = {
    fontWeight: regular ? "normal" : "bold",
    fontFamily: "Lato, sans-serif",
    color: textColor,
  }

  return <Text style={[styles[`h${level}`], fontStyle, style]}>{children}</Text>
}
