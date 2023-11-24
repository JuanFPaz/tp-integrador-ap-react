/* eslint-disable no-undef */
import AddTaskList from './Tasks/AddTaskList'
import TaskList from './Tasks/TaskList'
import localForage from '../data/dataLocal'
import { useState } from 'react'

function Main () {
  const [taskList, setTaskList] = useState([])

  console.log(localForage.saveDataToLocalForage())
  console.log(localForage.getDataFromLocalForage())

  function eventAddTaskList (_nombre) {
    const newTaskList = {
      id: self.crypto.randomUUID(),
      nombre: _nombre
    }
    setTaskList([...taskList, newTaskList])
  }

  const eventDeleteTaskList = (id) => {
    const deleteTask = taskList.filter(tl => tl.id !== id)
    setTaskList([...deleteTask])
  }

  function getTaskList () {
    return taskList.length === 0
  }

  return (
    <main>
      {getTaskList() ? (<></>) : (taskList.map(tl => (<TaskList key={tl.id} onDeleteTask={(id) => eventDeleteTaskList(id)} {...tl} />)))}
      <AddTaskList onAddTask={(nombre) => { eventAddTaskList(nombre) }} getTaskList={getTaskList} />
    </main>
  )
}

export default Main
