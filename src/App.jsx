import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import localForage from 'localforage'

function App () {
  const [datos, setDatos] = useState([])
  const [cargando, setCargando] = useState(true)
  useEffect(() => {
    async function getData () {
      try {
        console.log('obteniendoDatos')
        const miau = await localForage.getItem('taskList')
        if (!miau) {
          throw Error('Miau es nullo')
        }
        setDatos(JSON.parse(miau))
        setCargando(false)
      } catch (err) {
        console.error('Ocurrio un error' + err.message)
        setDatos([])
        setCargando(false)
      }
    }
    console.log('Se renderiza App')
    getData()
  }, [])
  return (
    <>
      <Header />
      {cargando ? (<>Cargando datos...</>) : <Main datos={datos} />}
    </>
  )
}

export default App
