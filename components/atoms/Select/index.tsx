import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { useRef, useState } from "react"
import {
  Animated,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"

const data = [
  { title: "happy", icon: "emoticon-happy-outline" },
  { title: "cool", icon: "emoticon-cool-outline" },
  { title: "lol", icon: "emoticon-lol-outline" },
  { title: "sad", icon: "emoticon-sad-outline" },
  { title: "cry", icon: "emoticon-cry-outline" },
]

type SelectProps = {
  onSelect?: (item: any) => void
  placeholder?: string
  buttonStyle?: StyleProp<ViewStyle>
  buttonTextStyle?: StyleProp<TextStyle>
  dropdownStyle?: StyleProp<ViewStyle>
  itemStyle?: StyleProp<ViewStyle>
  itemTextStyle?: StyleProp<TextStyle>
  selectedItemStyle?: StyleProp<ViewStyle>
}

export default function Select(props: SelectProps) {
  const {
    // data,
    onSelect,
    placeholder = "Select your mood",
    buttonStyle,
    buttonTextStyle,
    dropdownStyle,
    itemStyle,
    itemTextStyle,
    selectedItemStyle,
  } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  const animation = useRef(new Animated.Value(0)).current

  const toggleDropdown = () => {
    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start()
    setIsOpen(!isOpen)
  }

  const handleSelectItem = (item: any) => {
    setSelectedItem(item)
    toggleDropdown()
    onSelect?.(item)
  }

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  })

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.dropdownButton, buttonStyle]}
        onPress={toggleDropdown}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, buttonTextStyle]}>
          {selectedItem ? selectedItem.title : placeholder}
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color="#151E26"
          />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.dropdownList,
          dropdownStyle,
          { height: heightInterpolate },
        ]}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                itemStyle,
                selectedItem?.title === item.title && [
                  styles.selectedItem,
                  selectedItemStyle,
                ],
              ]}
              onPress={() => handleSelectItem(item)}
            >
              <MaterialCommunityIcons
                // name={item.icon}
                size={24}
                color="#151E26"
                style={styles.icon}
              />
              <Text style={[styles.itemText, itemTextStyle]}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    position: "relative",
    zIndex: 1,
  },
  dropdownButton: {
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#151E26",
  },
  dropdownList: {
    position: "absolute",
    top: "100%",
    width: "100%",
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
    marginTop: 4,
    overflow: "hidden",
  },
  scrollContent: {
    paddingVertical: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedItem: {
    backgroundColor: "#D2D9DF",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#151E26",
  },
  icon: {
    width: 24,
    textAlign: "center",
  },
})
