import localforage from 'localforage'

const saveDataToLocalForage = async () => {
  try {
    await localforage.setItem('primerForage', 'holaa owo')
    console.log('Datos guardados en LocalForage.')
  } catch (error) {
    console.error('Error al guardar datos en LocalForage:', error)
  }
}

const getDataFromLocalForage = async () => {
  try {
    const value = await localforage.getItem('primerForage')
    console.log('Datos obtenidos de LocalForage:', value)
  } catch (error) {
    console.error('Error al obtener datos de LocalForage:', error)
  }
}

export default { saveDataToLocalForage, getDataFromLocalForage }
