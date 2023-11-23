/* eslint-disable no-undef */
import AddTaskList from './Tasks/AddTaskList'
import TaskList from './Tasks/TaskList'
import { useState } from 'react'

function Main () {
  const [taskList, setTaskList] = useState([])

  function eventAddTaskList (_nombre) {
    const newTaskList = {
      id: self.crypto.randomUUID(),
      nombre: _nombre
    }
    setTaskList([...taskList, newTaskList])
  }

  const eventDeletTaskList = (id) => {
    const deleletTask = taskList.filter(tl => tl.id !== id)
    setTaskList([...deleletTask])
  }

  function getTaskList () {
    return taskList.length === 0
  }
  console.log(taskList)
  return (
    <main>
      {getTaskList() ? (' ') : (<TaskList onDeleteTask={(id) => eventDeletTaskList(id)} taskList={taskList} />)}
      <AddTaskList onAddTask={(nombre) => { eventAddTaskList(nombre) }} getTaskList={getTaskList} />
    </main>
  )
}

export default Main
