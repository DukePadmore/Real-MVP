import axios from 'axios';
import { ballDontLie } from '../utils/axios';
import playersData from '../utils/playersData.json';
import { useEffect, useState } from 'react';

const PlayerCard = ({
  id,
  first_name,
  last_name,
  position,
  height_feet,
  height_inches,
  weight_pounds,
  team,
  team_logo,
  setData,
  setPic,
  additionalData,
}) => {
  const handleClick = () => {
    displayPlayer(id);
  };

  // const [playerLocalData, setPlayerLocalData] = useState(null);
  // useEffect(() => {
  //   setPlayerLocalData(
  //     playersData.filter(
  //       player =>
  //         (player.firstName === first_name) & (player.lastName === last_name)
  //     )[0]
  //   );
  // }, []);

  const displayPlayer = async playerId => {
    const { data } = await ballDontLie.get(
      `season_averages?season=2022&player_ids[]=${playerId}`
    );
    setData(data.data);
  };

  return (
    <article className='player__card' onClick={handleClick}>
      <div className='player__team'>
        <img
          src={
            additionalData
              ? `https://cdn.nba.com/headshots/nba/latest/1040x760/${additionalData.personId}.png?imwidth=320&imheight=234`
              : team_logo
          }
          alt={team.abbreviation}
        />
      </div>
      <div className='player__info'>
        <h3 className='player__name'>{`${first_name} ${last_name}`}</h3>
        <div className='player__details'>
          <span className='player__position'>{position}</span>
          <span className='player__height'>{}</span>
          <span className='player__weight'>{}</span>
        </div>
      </div>
    </article>
  );
};
export default PlayerCard;
