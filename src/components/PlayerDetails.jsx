import logos from '../assets';
import teamsData from '../utils/teamsData.json';

const PlayerDetails = ({ stats, selectedPlayer }) => {
  const color = teamsData.find(
    team => team.abbreviation === selectedPlayer.team.abbreviation
  ).color;

  return (
    <div className='player-details'>
      <div
        className='player-details__top-container'
        style={{
          backgroundImage: `url(${logos[selectedPlayer.team.abbreviation]})`,
          backgroundColor: `${color}`,
        }}
      >
        <h2 className='player-details__name'>{`${selectedPlayer.first_name} ${selectedPlayer.last_name}`}</h2>
        <div className='player-details__image'>
          <img
            src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${selectedPlayer?.additionalData.personId}.png?imwidth=320&imheight=234`}
            alt=''
          />
        </div>
      </div>
      {/* Faire en sorte de modifier la couleur ci-dessous grâce à une fonction */}
      <div
        className='player-details__bottom-container'
        style={{ backgroundColor: `${color}` }}
      >
        <div>
          <p>min: {stats.min}</p>
          <p>pts: {stats.pts}</p>
          <p>reb: {stats.reb}</p>
          <p>ast: {stats.ast}</p>
          <p>stl: {stats.stl}</p>
          <p>blk: {stats.blk}</p>
          <p>to: {stats.turnover}</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PlayerDetails;
