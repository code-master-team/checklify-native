import CustomText from "@/components/atoms/CustomText"
import Container from "@/components/organisms/Container"
import { Link } from "expo-router"

export default function CalendarScreen() {
  return (
    <Container>
      <CustomText size="large" style={{ fontSize: 50 }}>
        text
      </CustomText>
      <Link href={"/signin"}>
        <CustomText>ASAS</CustomText>
      </Link>
    </Container>
  )
}
