/* eslint-disable react/prop-types */
function TaskItems ({ nombre, id, completada, onDeleteTaskItem, onCheckTaskItem }) {
  return (
    <div className='taskItems'>
      <div className='taskItems-tarea'>
        <div className='tarea-texto'>{nombre}</div>
        <div>
          <span onClick={() => { onDeleteTaskItem(id) }}>[X]</span>
        </div>
      </div>
      <div>
        <input type='checkbox' name='asd' id='asd' onChange={() => { onCheckTaskItem(id) }} /> {completada ? 'finalizada' : 'pendiente'}
      </div>
    </div>
  )
}

export default TaskItems
