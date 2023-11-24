/* eslint-disable react/prop-types */
import { useState } from 'react'

function AddTaskItem ({ onAddTaskItem }) {
  const [showForm, setShowForm] = useState(false)
  function toggleForm () {
    setShowForm(!showForm)
  }

  const eventNewTaskList = (e) => {
    e.preventDefault()
    const formAddTask = new FormData(e.target)
    const nombre = formAddTask.get('nombre')
    onAddTaskItem(nombre)
    e.target.reset()
    setShowForm(false)
  }
  return (
    <>
      {showForm
        ? (
          <div className='taskForm-contenedor'>
            <form onSubmit={eventNewTaskList}>
              <input
                type='text'
                placeholder='Introduzca nombre de la tarea'
                aria-label='Nombre de la tarea'
                name='nombre'
                id='nombre'
                required
              />
              <input type='submit' value='Añadir' />
            </form>
            <span onClick={toggleForm}>[X]</span>
          </div>
          )
        : (
          <div className='taskForm-contenedor' onClick={toggleForm}>
            [+] Añadir nueva tarea
          </div>
          )}
    </>

  )
}

export default AddTaskItem
