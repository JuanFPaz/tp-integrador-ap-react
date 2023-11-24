/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
function dragStart (event) {
  event.dataTransfer.setData('Text', event.target.id)
  console.log(event.target)
}

function allowDrop (event) {
  event.preventDefault()
}

function drop (event) {
  event.preventDefault()
  const data = event.dataTransfer.getData('Text')
  const draggedElement = document.getElementById(data)
  event.target.appendChild(draggedElement)
}

const tareas = [{ id: self.crypto.randomUUID, nombre: 'cocinar', esCompletada: false }, { id: self.crypto.randomUUID, nombre: 'cocinar', esCompletada: false }, { id: self.crypto.randomUUID, nombre: 'cocinar', esCompletada: false }]

const listaUno = [tareas]
const listaDos = []
