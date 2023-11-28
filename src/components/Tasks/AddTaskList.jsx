/* eslint-disable react/prop-types */
import { useState } from 'react'

function AddTaskList ({ onAddTaskList }) {
  const [showForm, setShowForm] = useState(false)

  function toggleForm () {
    setShowForm(!showForm)
  }

  function eventFormNewTaskList (e) {
    e.preventDefault()
    const formAddTask = new FormData(e.target)
    const nombre = formAddTask.get('nombre')
    onAddTaskList(nombre)
    e.target.reset()
    setShowForm(false)
  }

  return (
    <div className='addTaskList'>
      {showForm
        ? (
          <>
            <form onSubmit={eventFormNewTaskList}>
              <input
                type='text'
                placeholder='Introduzca titulo de la lista'
                aria-label='Nombre de la lista'
                name='nombre'
                id='nombre'
                required
              />
              <input type='submit' value='Añadir' />
              <button onClick={toggleForm}>Cancelar</button>
            </form>
          </>
          )
        : (
          <>
            <button onClick={toggleForm}> + Añadir Nueva Lista</button>
          </>
          )}

    </div>

  )
}

export default AddTaskList
