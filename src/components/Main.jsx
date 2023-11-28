/* eslint-disable react/prop-types */
import AddTaskList from './Tasks/AddTaskList'
import TaskList from './Tasks/TaskList'
import localForage from '../data/dataLocal'
import { useEffect, useState } from 'react'

function Main ({ datos }) {
  const [taskList, setTaskList] = useState(datos)

  useEffect(() => {
    async function guardarDatos () {
      await localForage.saveDataToLocalForage('taskList', JSON.stringify(taskList))
    }
    console.log(taskList)
    guardarDatos()
  }, [taskList])

  function eventAddTaskList (_nombre) {
    const newTaskList = {
      id: self.crypto.randomUUID(),
      nombre: _nombre,
      tareas: []
    }
    setTaskList([...taskList, newTaskList])
  }
  function eventRanemaTaskList (id, renombre) {
    const renameTaskList = taskList.map(tl => tl.id === id ? { ...tl, nombre: renombre } : tl)
    setTaskList([...renameTaskList])
  }

  function eventDeleteTaskList (id) {
    const deleteTask = taskList.filter(tl => tl.id !== id)
    setTaskList([...deleteTask])
  }

  function eventTaskItem (id, unArray) {
    const addTaskItem = taskList.map(tl => tl.id === id ? { ...tl, tareas: [...unArray] } : tl)
    setTaskList([...addTaskItem])
  }

  function getTaskList () {
    return taskList.length === 0
  }

  return (
    <main>
      {getTaskList() ? (<></>) : (taskList.map(tl => (<TaskList key={tl.id} onDeleteTask={(id) => eventDeleteTaskList(id)} {...tl} onTaskItem={(id, unArray) => eventTaskItem(id, unArray)} onRenameTaskList={(id, rename) => { eventRanemaTaskList(id, rename) }} />)))}
      <AddTaskList onAddTask={(nombre) => { eventAddTaskList(nombre) }} getTaskList={getTaskList} />
    </main>
  )
}

export default Main
