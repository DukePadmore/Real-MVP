import { ballDontLie } from '../utils/axios';
import playersData from '../utils/playersData.json';

const TeamCard = ({
  abbreviation,
  location,
  conference,
  division,
  teamName,
  teamId,
  logo,
}) => {
  const handleClick = () => {
    const data = playersData.filter(player => +player.teamId === teamId);
    console.log(data);
  };
  return (
    <div className='team-card' onClick={handleClick}>
      <div>
        <img className='team-logo' src={logo} alt={teamName} />
      </div>
      <div className='team-text'>
        <h3>{teamName}</h3>
        {/* <p>{conference}</p> */}
      </div>
    </div>
  );
};

export default TeamCard;
