import { Colors } from "@/constants/Colors"
import { useThemeColor } from "@/hooks/useThemeColor"
import { IOption } from "@/types"
import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { Dropdown } from "react-native-element-dropdown"

const data: IOption[] = [
  { label: "Yesterday", value: "yesterday" },
  { label: "Today", value: "today" },
  { label: "Tomorrow", value: "tomorrow" },
  { label: "This week", value: "this week" },
]

interface IDropdownProps {
  placeholder?: string
  onChange?: (value: string) => void
}

export default function CustomDropdown(props: IDropdownProps) {
  const { placeholder = "Select item", onChange } = props
  const backgroundColor = useThemeColor("backgroundSecondary")
  const color = useThemeColor("text")

  const textRef = useRef<Text>(null)

  const { width: screenWidth } = Dimensions.get("window")

  const [value, setValue] = useState(null)
  const [dropdownWidth, setDropdownWidth] = useState<number>(400)

  const selectedItem = data.find((item) => item.value === value)
  const displayText = selectedItem ? selectedItem.label : placeholder

  useEffect(() => {
    if (textRef.current)
      textRef.current.measure((x, y, width) => {
        setDropdownWidth(width)
      })
  }, [value])

  return (
    <View style={{ alignSelf: "flex-start" }}>
      <Text ref={textRef} style={styles.measureText}>
        {displayText}
      </Text>

      <Dropdown
        style={[styles.dropdown, { backgroundColor, width: dropdownWidth }]}
        placeholderStyle={(styles.placeholderStyle, { color })}
        selectedTextStyle={[styles.selectedTextStyle, { color }]}
        containerStyle={[
          styles.container,
          {
            backgroundColor,
            borderColor: backgroundColor,
            width: screenWidth - 30,
          },
        ]}
        data={data}
        maxHeight={250}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        showsVerticalScrollIndicator={false}
        onChange={(item) => {
          setValue(item.value)
          onChange && onChange(item.value)
        }}
        renderItem={(item: IOption, selected) => (
          <Text
            style={[
              styles.item,
              {
                color,
                backgroundColor: selected ? Colors.gray : backgroundColor,
              },
            ]}
          >
            {item.label}
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    height: 32,
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
  },
  container: {
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 0,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  item: {
    height: 48,
    padding: 10,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  measureText: {
    fontSize: 14,
    position: "absolute",
    opacity: 0,
    visibility: "hidden",
    flexShrink: 1,
    color: "red",
    paddingLeft: 12,
    paddingRight: 40,
    backgroundColor: "blue",
  },
})
