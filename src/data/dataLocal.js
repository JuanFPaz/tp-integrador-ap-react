import localforage from 'localforage'

const saveDataToLocalForage = async (unaClave, unObjeto) => {
  try {
    await localforage.setItem(unaClave, unObjeto)
    console.log('Datos guardados en LocalForage.')
  } catch (error) {
    console.error('Error al guardar datos en LocalForage:', error)
    throw new Error(error)
  }
}

const getDataFromLocalForage = async (unaClave) => {
  try {
    const value = await localforage.getItem(unaClave)
    return value
  } catch (error) {
    console.error('Error al obtener datos de LocalForage:', error)
    throw new Error(error)
  }
}

const removeDataFromLocalForage = async (unaClave) => {
  try {
    await localforage.removeItem(unaClave)
    console.log('Datos borrados del LocalForage')
  } catch (error) {
    console.error('Error al borrar datos de LocalForage:', error)
  }
}

const miau = { saveDataToLocalForage, getDataFromLocalForage, removeDataFromLocalForage }
export default miau
