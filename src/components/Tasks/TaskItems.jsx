function TaskItems () {
  return (
    <div className='taskItems-contenedor'>
      <div className='taskItems'>
        <div className='taskItems-tarea'>
          <div className='tarea-texto'>Compra Pan</div>
          <div>
            <span>[X]</span>
          </div>
        </div>
        <div>
          <input type='checkbox' name='asd' id='asd' /> pendiente
        </div>
      </div>
    </div>
  )
}

export default TaskItems
