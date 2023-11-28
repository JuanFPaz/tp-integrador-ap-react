/* eslint-disable react/prop-types */
import { useState } from 'react'

function AddTaskItem ({ onAddItem }) {
  const [showForm, setShowForm] = useState(false)
  function toggleForm () {
    setShowForm(!showForm)
  }

  const eventNewTaskList = (e) => {
    e.preventDefault()
    const formAddTask = new FormData(e.target)
    const nombre = formAddTask.get('nombre')
    onAddItem(nombre)
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
              <button onClick={toggleForm}>Cancelar</button>
            </form>
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
