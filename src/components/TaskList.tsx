import React from 'react'
import { useSelector } from 'react-redux'
// typescriptの場合、stateの型を指定する必要がある
import { RootState } from '../rootReducer'
import TaskItem from './TaskItem'
// import { Task } from '../Types'

// type Props = {
//   setTasks: React.Dispatch<React.SetStateAction<Task[]>>
//   tasks: Task[]
// }

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks)
  // const { setTasks, tasks } = props

  // const handleDelete = (task: Task) => {
  //   setTasks((prev) => prev.filter((t) => t.id !== task.id))
  // }

  // const handleDone = (task: Task) => {
  //   setTasks((prev) =>
  //     prev.map((t) => (t.id === task.id ? { ...task, done: !task.done } : t))
  //   )
  // }

  return (
    <div className="inner">
      {tasks.length <= 0 ? (
        '登録されたTODOはありません。'
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              // handleDelete={handleDelete}
              // handleDone={handleDone}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList
