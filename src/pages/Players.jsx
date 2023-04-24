import { useState } from 'react';
import playersData from '../utils/playersData.json';
import PlayerCard from '../components/PlayerCard';
import { ballDontLie } from '../utils/axios';
import logos from '../assets';

const Players = () => {
  const [search, setSearch] = useState('');
  const [players, setPlayers] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    getPlayers(search.toLowerCase());
  };

  const getPlayers = async name => {
    try {
      const { data } = await ballDontLie.get(
        `/players?search=${name}&per_page=30`
      );
      const completeData = [];
      for (const player of data.data) {
        const additionalData = playersData.find(
          localPlayer =>
            (localPlayer.firstName === player.first_name) &
            (localPlayer.lastName === player.last_name)
        );
        additionalData
          ? completeData.push({ ...player, additionalData })
          : completeData.push(player);
      }
      setPlayers(completeData);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(players);

  return (
    <div className='players'>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='player-search'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      {players.map(player => (
        <PlayerCard
          key={player.id}
          team_logo={logos[player.team.abbreviation]}
          {...player}
        />
      ))}
    </div>
  );
};

export default Players;
