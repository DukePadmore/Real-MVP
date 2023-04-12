import { ballDontLie } from '../utils/axios';

const TeamCard = ({
  abbreviation,
  city,
  conference,
  division,
  full_name,
  name,
  logo,
  id,
}) => {
  const handleClick = async () => {
    const { data } = await ballDontLie(
      `games?seasons[]=2022&team_ids[]=${id}&per_page=82`
    );
    console.log(data.data);
  };
  return (
    <div className='team-card' onClick={handleClick}>
      <div>
        <img className='team-logo' src={logo} alt={full_name} />
      </div>
      <div className='team-text'>
        <h3>{full_name}</h3>
        <p>{conference}</p>
      </div>
    </div>
  );
};

export default TeamCard;
