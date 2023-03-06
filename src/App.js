import './App.css';
import { Routes, Route } from 'react-router-dom';

import Inicio from './components/views/Inicio';
import Login from './components/views/Login';
import Cursos from './components/views/Cursos'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Inicio/> } />
        <Route path='/cursos' element={ <Cursos/> } />
        <Route path='/login' element={ <Login/> } />
      </Routes>
    </div>
  );
}

export default App;
