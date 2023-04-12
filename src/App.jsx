import NavBar from './components/NavBar';
import Players from './pages/Players';
import Games from './pages/Games';
import Teams from './pages/Teams';

function App() {
  return (
    <div className='App'>
      <Games />
      {/* <Players /> */}
      {/* <Teams /> */}
      <NavBar />
    </div>
  );
}

export default App;
