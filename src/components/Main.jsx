/* eslint-disable react/prop-types */
import AddTaskList from './Tasks/AddTaskList'
import TaskList from './Tasks/TaskList'
import localForage from 'localforage'
import { useEffect, useState } from 'react'

function Main ({ datos }) {
  const [taskList, setTaskList] = useState(datos)

  useEffect(() => {
    async function guardarDatos () {
      try {
        await localForage.setItem('taskList', JSON.stringify(taskList))
        console.log('Datos guardados en LocalForage.')
      } catch (error) {
        console.error('Error al guardar datos en LocalForage:', error)
        throw new Error(error)
      }
    }
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

  return (
    <main>
      {taskList.map(tl => (<TaskList key={tl.id} onDeleteTask={(id) => eventDeleteTaskList(id)} {...tl} onTaskItem={(id, unArray) => eventTaskItem(id, unArray)} onRenameTaskList={(id, rename) => { eventRanemaTaskList(id, rename) }} />))}
      <AddTaskList onAddTask={(nombre) => { eventAddTaskList(nombre) }} />
    </main>
  )
}

export default Main
