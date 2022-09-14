import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeApp from './Components/HomeApp';
import { PersonajesApp } from './Components/Personajes/PersonajesApp';
import { PlanetasApp } from './Components/Planetas/PlanetasApp';
import { DetallePersonaje } from './Components/Personajes/DetallePersonaje';
import { DetallePlaneta } from './Components/Planetas/DetallePlaneta';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomeApp/>}></Route>
        <Route exact path='/Personajes' element={<PersonajesApp/>} />
        <Route exact path='/Planetas' element={<PlanetasApp/>}/>
        <Route exact path='/Personaje/:name' element={<DetallePersonaje/>}/>
        <Route exact path='/Planeta/:name' element={<DetallePlaneta/>}/>
      </Routes>
    </div>
  );
}

export default App;
