
import { Routes, Route } from 'react-router-dom';

import Inicio from './components/views/Inicio';
import Login from './components/views/Login';
import Cursos from './components/views/Cursos'
import NotFound from './components/views/NotFound';

export const url = "/Orbita"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={url+'/'} element={ <Inicio/> } />
        <Route path={ url + '/cursos'} element={ <Cursos/> } />
        <Route path={url + '/login'} element={ <Login/> } />
        <Route path={'/*'} element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
