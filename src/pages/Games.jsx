import { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import Game from '../components/Game';
import logos from '../assets/index';
import { ballDontLie } from '../utils/axios';
import { format, add, sub } from 'date-fns';

const Games = () => {
  const [games, setGames] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = [
    sub(selectedDate, { days: 3 }),
    sub(selectedDate, { days: 2 }),
    sub(selectedDate, { days: 1 }),
    selectedDate,
    add(selectedDate, { days: 1 }),
    add(selectedDate, { days: 2 }),
    add(selectedDate, { days: 3 }),
  ];

  async function getGames() {
    const { data } = await ballDontLie.get(
      `games?dates[]=${format(selectedDate, 'yyyy-MM-dd')}`
    );
    setGames(data.data);
  }

  useEffect(() => {
    getGames();
  }, [selectedDate]);

  return (
    <div className='games'>
      <div className='calendar'>
        <h2>{format(selectedDate, 'MMMM')}</h2>
        <div className='calendar__week'>
          {days.map(day => (
            <div
              key={day}
              className={
                day === selectedDate
                  ? 'calendar__day selected'
                  : 'calendar__day'
              }
              onClick={() => setSelectedDate(day)}
            >
              <span className='day-letter'>{format(day, 'EEEEE')}</span>
              <span className='day-number'>{format(day, 'dd')}</span>
            </div>
          ))}
        </div>
      </div>
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
