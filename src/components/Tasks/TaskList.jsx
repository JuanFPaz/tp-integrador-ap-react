/* eslint-disable react/prop-types */
import { useState } from 'react'
import AddTaskItem from './AddTaskItem'
import TaskItems from './TaskItems'

function TaskList ({ nombre, id, tareas, onDeleteTaskList, onRenameTaskList, onChangeTaskItem }) {
  const [taskItem, setTaskItem] = useState([...tareas])
  const [showRename, setRename] = useState(false)

  function toggleRename () {
    setRename(!showRename)
  }
  function eventAddTaskItem (_nombre) {
    const newTaskItem = {
      id: self.crypto.randomUUID(),
      nombre: _nombre,
      completada: false
    }

    setTaskItem([...taskItem, newTaskItem])
    onChangeTaskItem(id, [...taskItem, newTaskItem])
  }
  function eventCheckTaskItem (_id) {
    const modifiedTasks = taskItem.map(ti =>
      ti.id === _id
        ? { ...ti, completada: !ti.completada }
        : ti
    )
    setTaskItem([...modifiedTasks])
    onChangeTaskItem(id, [...modifiedTasks])
  }
  function eventDeleteTaskItem (_id) {
    const deleteTaskItem = taskItem.filter(ti => ti.id !== _id)
    setTaskItem([...deleteTaskItem])
    onChangeTaskItem(id, [...deleteTaskItem])
  }
  function eventRenameTaskItem (_id, renombre) {
    const renameTaskList = taskItem.map(ti => ti.id === _id ? { ...ti, nombre: renombre } : ti)
    setTaskItem([...renameTaskList])
    onChangeTaskItem(id, [...renameTaskList])
  }
  function eventFormRenameTaskList (e) {
    e.preventDefault()
    const formRename = new FormData(e.target)
    const rename = formRename.get('rename')
    onRenameTaskList(id, rename)
    setRename(false)
  }
  return (
    <>
      <div className='taskList'>
        <div className='taskList-encabezado'>
          {showRename
            ? (
              <>
                <form onSubmit={eventFormRenameTaskList}>
                  <input type='text' name='rename' id='rename' placeholder='Cambie el nombre de la lista de tareas' required />
                  <input type='submit' value='Cambiar' />
                  <button onClick={toggleRename}>Cancelar</button>
                </form>

              </>
              )
            : (
              <>
                <h1 onClick={toggleRename}>{nombre}</h1>
                <button onClick={() => onDeleteTaskList(id)}>X</button>
              </>
              )}
        </div>
        <div className='taskItems-contenedor'>
          {taskItem.map(ti => (<TaskItems key={ti.id} onDeleteTaskItem={(id) => { eventDeleteTaskItem(id) }} onCheckTaskItem={(id) => { eventCheckTaskItem(id) }} onRenameTaskItem={(id, renombre) => { eventRenameTaskItem(id, renombre) }} {...ti} />))}
        </div>
        <AddTaskItem onAddItem={(nombre) => { eventAddTaskItem(nombre) }} />
      </div>
    </>
  )
}

export default TaskList
