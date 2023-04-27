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
  setStats,
  setPic,
  additionalData,
  setSelectedPlayer,
}) => {
  const handleClick = () => {
    displayPlayer(id);
  };

  const displayPlayer = async playerId => {
    const { data } = await ballDontLie.get(
      `season_averages?season=2022&player_ids[]=${playerId}`
    );
    setStats(data.data[0]);
    setSelectedPlayer({
      id,
      first_name,
      last_name,
      position,
      height_feet,
      height_inches,
      weight_pounds,
      team,
      additionalData,
    });
  };

  return (
    <article className='player-card' onClick={handleClick}>
      <div className='player-card__pic'>
        <img
          src={
            additionalData
              ? `https://cdn.nba.com/headshots/nba/latest/1040x760/${additionalData.personId}.png?imwidth=320&imheight=234`
              : team_logo
          }
          alt={team.abbreviation}
        />
      </div>
      <div className='player-card__info'>
        <h3 className='player-card__name'>{`${first_name} ${last_name}`}</h3>
        <div className='player-card__details'>
          <span className='player-card__position'>{position}</span>
          <span className='player-card__height'>{}</span>
          <span className='player-card__weight'>{}</span>
        </div>
      </div>
    </article>
  );
};
export default PlayerCard;
