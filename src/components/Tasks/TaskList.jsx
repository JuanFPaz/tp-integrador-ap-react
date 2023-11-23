/* eslint-disable react/prop-types */
import TaskForm from './TaskForm'
import TaskItems from './TaskItems'

function TaskList ({ taskList, onDeleteTask }) {
  return (
    <>
      {taskList.map((tl) => (
        <div className='taskList-contenedor' key={tl.id}>
          <div className='taskList'>
            <div className='taskList-encabezado'>
              <h1>{tl.nombre}</h1>
              <span onClick={() => onDeleteTask(tl.id)}>[X]</span>
            </div>
            <TaskItems />
            <TaskForm />
          </div>
        </div>
      ))}
    </>
  )
}

export default TaskList
