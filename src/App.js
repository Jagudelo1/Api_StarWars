import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeApp from './Components/HomeApp'
import { DetallePersonaje } from './Components/Personajes/DetallePersonaje'
import { PersonajesApp } from './Components/Personajes/PersonajesApp'
import { DetallePlaneta } from './Components/Planetas/DetallePlaneta'
import { PlanetasApp } from './Components/Planetas/PlanetasApp'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomeApp />}></Route>
        <Route exact path='/Personajes' element={<PersonajesApp />} />
        <Route exact path='/Planetas' element={<PlanetasApp />} />
        <Route exact path='/Personaje/:name' element={<DetallePersonaje />} />
        <Route exact path='/Planeta/:name' element={<DetallePlaneta />} />
      </Routes>
    </div>
  )
}

export default App
