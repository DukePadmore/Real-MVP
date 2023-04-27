import { useState } from 'react';
import playersData from '../utils/playersData.json';
import PlayerCard from '../components/PlayerCard';
import { ballDontLie } from '../utils/axios';
import logos from '../assets';
import PlayerDetails from '../components/PlayerDetails';

const Players = () => {
  const [search, setSearch] = useState('');
  const [players, setPlayers] = useState([]);
  const [stats, setStats] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (!search) {
      return;
    }
    getPlayers(search.toLowerCase());
    setStats(null);
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

  console.log(selectedPlayer);
  console.log(stats);

  return (
    <div className='players'>
      {!stats && (
        <form className='players__form' action='' onSubmit={handleSubmit}>
          <input
            className='players__input'
            type='text'
            name='player-search'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
      )}
      {!stats &&
        players.map(player => (
          <PlayerCard
            key={player.id}
            team_logo={logos[player.team.abbreviation]}
            setStats={setStats}
            setSelectedPlayer={setSelectedPlayer}
            {...player}
          />
        ))}
      {stats && <PlayerDetails stats={stats} selectedPlayer={selectedPlayer} />}
    </div>
  );
};

export default Players;
