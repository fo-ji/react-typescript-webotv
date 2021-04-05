import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
// import { Task } from '../Types'
import { addTask } from '../modules/tasksModule'

// type Props = {
//   setTasks: React.Dispatch<React.SetStateAction<Task[]>>
//   tasks: Task[]
// }

// useForm用
type FormData = {
  title: string
}

const TaskInput: React.FC = () => {
  // const { setTasks, tasks } = props
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, reset } = useForm<FormData>()
  // const [title, setTitle] = useState('')
  // const [count, setCount] = useState(tasks.length + 1)

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value)
  // }

  const handleOnSubmit = (data: FormData) => {
    dispatch(addTask(data.title))
    // setTitle('')
    reset()
    // setCount(count + 1)

    // const newTask = {
    //   id: count,
    //   title: title,
    //   done: false,
    // }

    // setTasks([newTask, ...tasks])
    // setTitle('')
  }

  // react-hook-formを使用する場合、inputをformタグで囲む必要あり
  // nameも必要
  return (
    <form className="input-form" onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="inner">
        <input
          className="input"
          name="title"
          // onChange={handleInput}
          ref={register({
            // この中にバリデーションルールを記載していく
            required: 'タイトルは必須です',
            minLength: {
              value: 3,
              message: 'タイトルは3文字以上で入力してください',
            },
            maxLength: {
              value: 10,
              message: 'タイトルは10文字以内で入力してください',
            },
          })}
          type="text"
          // value={title}
        />
        <button className="btn is-primary">追加</button>
        {/* register内で指定したメッセージをerrorsから取り出せる */}
        {errors.title && (
          <span className="error-message">{errors.title.message}</span>
        )}
      </div>
    </form>
  )
}

export default TaskInput
