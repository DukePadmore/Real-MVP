import { useState } from 'react';
import { ballDontLie } from '../utils/axios';
import PlayerCard from '../components/PlayerCard';
import logos from '../assets';

const Players = () => {
  const [playerSearch, setPlayerSearch] = useState('');
  const [playersData, setPlayersData] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    searchPlayer(playerSearch.toLowerCase());
  };
  const searchPlayer = async player => {
    const { data } = await ballDontLie.get(
      `/players?search=${player}&per_page=30`
    );
    setPlayersData(data.data);
  };

  return (
    <div className='players'>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='player-search'
          value={playerSearch}
          onChange={e => setPlayerSearch(e.target.value)}
        />
      </form>
      {playersData.map(player => (
        <PlayerCard
          key={player.id}
          {...player}
          team_logo={logos[player.team.abbreviation]}
        />
      ))}
    </div>
  );
};

export default Players;
