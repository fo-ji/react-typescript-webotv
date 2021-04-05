import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../Types'

// 型定義
type State = {
  count: number
  tasks: Task[]
}

// 初期値
const initialState: State = {
  count: 2,
  tasks: [
    {
      id: 2,
      title: '次のTodo',
      done: false,
    },
    {
      id: 1,
      title: '最初のTodo',
      done: true,
    },
  ],
}

// スライス作成
const tasksModule = createSlice({
  name: 'tasks', // このcreateSliceを識別する為の名前
  initialState, // 初期値
  reducers: {
    // 処理する関数をここで定義
    // reducersは第一引数にstate, 第二引数にactionsを受け取る
    addTask(state: State, action: PayloadAction<string>) {
      state.count++

      const newTask = {
        id: state.count,
        // 今回だとtitleのみ引数で受け取る = action.payloadで受け取る
        title: action.payload,
        done: false,
      }

      // setTasks([newTask, ...tasks])
      // hooksは使わない？直接stateを更新している
      state.tasks = [newTask, ...state.tasks]
    },
    doneTask(state: State, action: PayloadAction<Task>) {
      const task = state.tasks.find((t) => t.id === action.payload.id)

      if (task) {
        task.done = !task.done
      }

      // state.tasks = state.tasks.map((t) => {
      //   return t.id === action.payload.id
      //     ? { ...t, done: !action.payload.done }
      //     : t
      // })
    },
    deleteTask(state: State, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id)
    },
  },
})

// 各コンポーネントからアクセスしやすいようにexport
export const { addTask, doneTask, deleteTask } = tasksModule.actions

export default tasksModule

// 最後にrootReducersに登録する
