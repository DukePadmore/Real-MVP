import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Scores from './pages/Scores';
import { ballDontLie } from './utils/axios';

function App() {
  // SEARCH PLAYER TEST
  // async function searchPlayer(player) {
  //   const { data } = await ballDontLie.get(
  //     `/players?search=${player}&per_page=30`
  //   );
  //   console.log(data);
  // }

  const [player, setPlayer] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    searchPlayer(player.toLowerCase());
  };

  return (
    <div className='App'>
      {/* <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='player-search'
          value={player}
          onChange={e => setPlayer(e.target.value)}
        />
      </form> */}
      <Scores />
      <NavBar />
    </div>
  );
}

export default App;
