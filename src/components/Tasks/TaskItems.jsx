/* eslint-disable react/prop-types */
import { useState } from 'react'

function TaskItems ({ nombre, id, completada, onDeleteTaskItem, onCheckTaskItem, onRenameTaskItem }) {
  const [showRenameItem, setRenameItem] = useState(false)
  return (
    <>
      {showRenameItem
        ? (
          <div className='taskItems'>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const rename = formData.get('asd')
              onRenameTaskItem(id, rename)
              e.target.reset()
              setRenameItem(false)
            }}
            >
              <input type='text' name='asd' id='asd' />
              <input type='submit' value='Añadir' />
              <button onClick={() => { setRenameItem(!showRenameItem) }}>Cancelar</button>
            </form>
          </div>)
        : (
          <div className='taskItems'>
            <div className='taskItems-tarea'>
              <div className='tarea-texto'>
                <span onClick={() => { setRenameItem(!showRenameItem) }}>{nombre}</span>
              </div>
              <div>
                <button onClick={() => { onDeleteTaskItem(id) }}>X</button>
              </div>
            </div>
            <div>
              <input type='checkbox' checked={completada} name='checkTask' id='checkTask' onChange={() => { onCheckTaskItem(id) }} /> {completada ? 'finalizada' : 'pendiente'}
            </div>
          </div>)}

    </>
  )
}

export default TaskItems
