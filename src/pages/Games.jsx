import { useEffect, useState } from 'react';
import { format, add, sub } from 'date-fns';
import { ballDontLie } from '../utils/axios';
import logos from '../assets/index';
import Left from '../assets/icons/chevron-left.svg';
import Right from '../assets/icons/chevron-right.svg';
import Game from '../components/Game';

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

  const getGames = async () => {
    try {
      const { data } = await ballDontLie.get(
        `games?dates[]=${format(selectedDate, 'yyyy-MM-dd')}`
      );
      setGames(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getGames();
  }, [selectedDate]);

  return (
    <div className='games'>
      <div className='calendar'>
        <h2>{format(selectedDate, 'MMMM')}</h2>
        <div className='calendar__week'>
          <div className='arrows'>
            <img
              src={Left}
              alt='arrow left'
              onClick={() => {
                setSelectedDate(sub(selectedDate, { days: 1 }));
              }}
            />
          </div>
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
          <div
            className='arrows'
            onClick={() => {
              setSelectedDate(add(selectedDate, { days: 1 }));
            }}
          >
            <img src={Right} alt='arrow right' />
          </div>
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
