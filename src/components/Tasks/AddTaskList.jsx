/* eslint-disable react/prop-types */
import { useState } from 'react'

function AddTaskList ({ onAddTask, getTaskList }) {
  const [showForm, setShowForm] = useState(false)

  function toggleForm () {
    setShowForm(!showForm)
  }

  const eventNewTaskList = (e) => {
    e.preventDefault()
    const formAddTask = new FormData(e.target)
    const nombre = formAddTask.get('nombre')
    onAddTask(nombre)
    e.target.reset()
    setShowForm(false)
  }
  return (
    <>
      <div className='addTaskList-contenedor'>
        {showForm
          ? (
            <div className='addTaskList'>
              <span onClick={toggleForm}>[X]</span>
              <form onSubmit={eventNewTaskList}>
                <input
                  type='text'
                  placeholder='Nombre de la lista'
                  name='nombre'
                  id='nombre'
                  required
                />
              </form>
            </div>
            )
          : (
            <div className='addTaskList' onClick={toggleForm}>
              [+] {getTaskList() ? 'Añadir una lista' : 'Añadir otra lista'}
            </div>
            )}

      </div>
    </>

  )
}

export default AddTaskList
