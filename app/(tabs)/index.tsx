import CustomDropdown from "@/components/atoms/CustomDropdown"
import Container from "@/components/organisms/Container"
import TaskList from "@/components/organisms/TaskList"

export default function HomeScreen() {
  return (
    <Container>
      <CustomDropdown />
      <TaskList />
    </Container>
  )
}
