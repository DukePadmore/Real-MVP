import { useState } from 'react';
import logos from '../assets';
import teamsData from '../utils/teamsData.json';
import { ballDontLie } from '../utils/axios';
import { colorShift } from '../utils/colorShift';

const PlayerDetails = ({
  stats,
  setStats,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  const color = teamsData.find(
    team => team.abbreviation === selectedPlayer.team.abbreviation
  ).color;
  const secondColor = colorShift(color, 40);
  const [noDataMessage, setNoDataMessage] = useState(false);

  const handleSelect = async e => {
    e.preventDefault();
    const { data } = await ballDontLie.get(
      `season_averages?season=${e.target.value}&player_ids[]=${selectedPlayer.id}`
    );
    if (!data.data[0]) {
      setNoDataMessage(true);
      return;
    }
    setStats(data.data[0]);
    setNoDataMessage(false);
  };

  return (
    <div
      className='player-details'
      style={{
        background: `linear-gradient(135deg, ${secondColor} 10%, ${color} 50%`,
      }}
    >
      <div
        className='player-details__top-container'
        style={{
          backgroundImage: `url(${logos[selectedPlayer.team.abbreviation]})`,
        }}
      >
        <span
          className='player-details__exit'
          onClick={() => {
            setStats(null);
            setSelectedPlayer(null);
          }}
        >
          x
        </span>
        <h2 className='player-details__name'>{`${selectedPlayer.first_name} ${selectedPlayer.last_name}`}</h2>
        <div className='player-details__image'>
          <img
            src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${selectedPlayer.additionalData.personId}.png?imwidth=320&imheight=234`}
            alt=''
          />
        </div>
      </div>
      <div className='player-details__bottom-container'>
        <div className='bottom-container__box'>
          <div className='details-container'>
            <div className='details__element'>
              <p className='element__label'>height</p>
              <p className='element__data'>
                {selectedPlayer.height_feet ??
                  selectedPlayer.additionalData.heightFeet}
                '
                {selectedPlayer.height_inches ??
                  selectedPlayer.additionalData.heightInches}
              </p>
            </div>
            <div className='details__element'>
              <p className='element__label'>weight</p>
              <p className='element__data'>
                {selectedPlayer.additionalData.weightKilograms}kg
              </p>
            </div>
            <div className='details__element'>
              <p className='element__label'>position</p>
              <p className='element__data'>
                {selectedPlayer.additionalData.pos}
              </p>
            </div>
            <div className='details__element'>
              <p className='element__label'>jersey</p>
              <p className='element__data'>
                {selectedPlayer.additionalData.jersey}
              </p>
            </div>
          </div>
        </div>
        <div className='bottom-container__box'>
          <select name='season' onChange={handleSelect}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
            <option value='2017'>2017</option>
            <option value='2016'>2016</option>
            <option value='2015'>2015</option>
            <option value='2014'>2014</option>
            <option value='2013'>2013</option>
            <option value='2012'>2012</option>
          </select>
          {noDataMessage ? (
            <p>No data</p>
          ) : (
            <div className='stats-container'>
              <div className='stats__element'>
                <p className='element__label'>MIN</p>
                <p className='element__data'>{stats.min}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>PTS</p>
                <p className='element__data'>{stats.pts}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>REB</p>
                <p className='element__data'>{stats.reb}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>OREB</p>
                <p className='element__data'>{stats.oreb}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>DREB</p>
                <p className='element__data'>{stats.dreb}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>AST</p>
                <p className='element__data'>{stats.ast}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>STL</p>
                <p className='element__data'>{stats.stl}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>BLK</p>
                <p className='element__data'>{stats.blk}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>TO</p>
                <p className='element__data'>{stats.turnover}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>PF</p>
                <p className='element__data'>{stats.pf}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>FG%</p>
                <p className='element__data'>{stats.fg_pct}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>3FG%</p>
                <p className='element__data'>{stats.fg3_pct}</p>
              </div>
              <div className='stats__element'>
                <p className='element__label'>FT%</p>
                <p className='element__data'>{stats.ft_pct}</p>
              </div>
            </div>
          )}
        </div>

        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PlayerDetails;
