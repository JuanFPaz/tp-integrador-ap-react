import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import localForage from './data/dataLocal'

function App () {
  const [datos, setDatos] = useState([])
  const [cargando, setCargando] = useState(true)
  useEffect(() => {
    async function getData () {
      try {
        const miau = await localForage.getDataFromLocalForage('taskList')
        setDatos(JSON.parse(miau))
        setCargando(false)
      } catch (err) {
        console.error(err)
        setDatos([])
        setCargando(false)
      }
    }
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
