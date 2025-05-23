import {
  CalendarIcon,
  CalendarIconOutlined,
  ClockIcon,
  ClockIconOutlined,
  HomeIcon,
  HomeIconOutlined,
  UserIcon,
  UserIconOutlined,
} from "@/assets/icons/tabs"
import { JSX } from "react"

type IconComponent = (props: { isFocused: boolean }) => JSX.Element

export const icons: Record<string, IconComponent> = {
  index: ({ isFocused }) => (isFocused ? <HomeIcon /> : <HomeIconOutlined />),
  calendar: ({ isFocused }) =>
    isFocused ? <CalendarIcon /> : <CalendarIconOutlined />,
  focus: ({ isFocused }) => (isFocused ? <ClockIcon /> : <ClockIconOutlined />),
  profile: ({ isFocused }) => (isFocused ? <UserIcon /> : <UserIconOutlined />),
}
