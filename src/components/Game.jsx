import { ballDontLie } from '../utils/axios';
import { format, isToday, isTomorrow, isValid } from 'date-fns';

const Game = ({
  id,
  home_team,
  home_team_score,
  home_logo,
  visitor_team,
  visitor_team_score,
  visitor_logo,
  status,
}) => {
  const handleClick = async () => {
    const { data } = await ballDontLie.get(`stats?game_ids[]=${id}`);
    console.log(data.data);
  };

  const gameTime = new Date(status);
  const isGameComing = isValid(gameTime);
  const scoreDisplay = isGameComing
    ? format(new Date(status), 'H:mm')
    : `${visitor_team_score}-${home_team_score}`;

  let periodDisplay = '';

  if (!isGameComing) {
    periodDisplay = status;
  } else if (isToday(gameTime)) {
    periodDisplay = 'Today';
  } else if (isTomorrow(gameTime)) {
    periodDisplay = 'Tomorrow';
  } else {
    periodDisplay = format(gameTime, 'EEEE, MMMM do ');
  }

  return (
    <article className='game' onClick={handleClick}>
      <div className='game__team away'>
        <img src={visitor_logo} alt='away team' />
        <h3>{visitor_team.name}</h3>
      </div>
      <div className='game__score'>
        <h2>{scoreDisplay}</h2>
        <h3>{periodDisplay}</h3>
      </div>
      <div className='game__team home'>
        <img src={home_logo} alt='home team' />
        <h3>{home_team.name}</h3>
      </div>
    </article>
  );
};

export default Game;
