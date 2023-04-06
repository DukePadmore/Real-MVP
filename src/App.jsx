import NavBar from './components/NavBar';
import Players from './pages/Players';
import Scores from './pages/Scores';
import Teams from './pages/Teams';

function App() {
  return (
    <div className='App'>
      {/* <Scores /> */}
      {/* <Players /> */}
      <Teams />
      <NavBar />
    </div>
  );
}

export default App;
