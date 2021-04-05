import React from 'react'
import { useDispatch } from 'react-redux'
import { Task } from '../Types'
import { doneTask, deleteTask } from '../modules/tasksModule'

type Props = {
  // handleDelete: (task: Task) => void
  // handleDone: (task: Task) => void
  task: Task
}

const TaskItem: React.FC<Props> = (props) => {
  const { task } = props
  const dispatch = useDispatch()

  return (
    <li className={task.done ? 'done' : ''}>
      <label className="checkbox-label">
        <input
          className="checkbox-input"
          defaultChecked={task.done}
          // 引数を持たせるときは関数で呼び出す
          onClick={() => dispatch(doneTask(task))}
          type="checkbox"
        />
      </label>
      <span>{task.title}</span>
      <button
        className="btn is-delete"
        onClick={() => dispatch(deleteTask(task))}
      >
        削除
      </button>
    </li>
  )
}

export default TaskItem
