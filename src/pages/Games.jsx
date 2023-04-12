import { useState } from 'react';
import Calendar from '../components/Calendar';
import Game from '../components/Game';
import { ballDontLie } from '../utils/axios';
import logos from '../assets/index';

const Games = () => {
  const [games, setGames] = useState([]);
  const [selectedDate, setSelectedDate] = useState();

  const getGames = async () => {
    const { data } = await ballDontLie.get('games?dates[]=2023-03-28');
    setGames(data.data);
  };

  console.log(games);
  return (
    <div className='games'>
      <Calendar />
      <button onClick={getGames}></button>
      {games.map(game => (
        <Game
          key={game.id}
          {...game}
          home_logo={logos[game.home_team.abbreviation]}
          visitor_logo={logos[game.visitor_team.abbreviation]}
        />
      ))}
    </div>
  );
};

export default Games;
