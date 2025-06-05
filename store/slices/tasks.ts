import { createSlice } from "@reduxjs/toolkit"

export interface ITask {
  id: string
  title: string
  description: string
  category: string
  priority: number
}

interface ITasksSlice {
  data: ITask[]
}

const initialState: ITasksSlice = {
  data: [
    {
      id: "1",
      title: "Task",
      description: "Description",
      category: "home",
      priority: 10,
    },
  ],
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
})

export default tasksSlice.reducer
