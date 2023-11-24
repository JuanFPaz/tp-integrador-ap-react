/* eslint-disable react/prop-types */
import { useState } from 'react'
import AddTaskItem from './AddTaskItem'
import TaskItems from './TaskItems'

function TaskList ({ nombre, id, onDeleteTask, getTaskList }) {
  const [taskItem, setTaskItem] = useState([])

  function eventAddTaskItem (_nombre) {
    const newTaskItem = {
      id: self.crypto.randomUUID(),
      nombre: _nombre,
      completada: false
    }

    setTaskItem([...taskItem, newTaskItem])
  }

  function eventCheckTaskItem (id) {
    const modifiedTasks = taskItem.map(ti =>
      ti.id === id
        ? { ...ti, completada: !ti.completada }
        : ti
    )
    setTaskItem([...modifiedTasks])
    console.log(taskItem)
  }
  function eventDeleteTaskItem (id) {
    const deleteTaskItem = taskItem.filter(ti => ti.id !== id)
    setTaskItem([...deleteTaskItem])
  }
  return (
    <>
      <div className='taskList'>
        <div className='taskList-encabezado'>
          <h1>{nombre}</h1>
          <span onClick={() => onDeleteTask(id)}>[X]</span>
        </div>
        <div className='taskItems-contenedor'>
          {taskItem.map(ti => (<TaskItems key={ti.id} onDeleteTaskItem={(id) => { eventDeleteTaskItem(id) }} onCheckTaskItem={(id) => { eventCheckTaskItem(id) }} {...ti} />))}
        </div>
        <AddTaskItem onAddTaskItem={(nombre) => { eventAddTaskItem(nombre) }} />
      </div>
    </>
  )
}

export default TaskList
