/* eslint-disable react/prop-types */
function AddTaskList ({ onAddTask, getTaskList }) {
  return (
    <div className='addTaskList-contenedor'>
      {/* Podrimmos crear un form aca? */}
      <div className='addTaskList' onClick={onAddTask}>
        [+] {getTaskList() ? 'Añadir una lista' : 'Añadir otra lista'}
      </div>
    </div>
  )
}

export default AddTaskList
