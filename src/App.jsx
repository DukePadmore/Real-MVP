import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Players from './pages/Players';
import Games from './pages/Games';
import Teams from './pages/Teams';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Games />} />
        <Route path='/players' element={<Players />} />
        <Route path='/teams' element={<Teams />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
