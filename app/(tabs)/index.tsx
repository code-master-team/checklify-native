import Select from "@/components/atoms/Select"
import Container from "@/components/organisms/Container"
import TaskList from "@/components/organisms/TaskList"

export default function HomeScreen() {
  return (
    <Container>
      <Select />
      <TaskList />
    </Container>
  )
}
