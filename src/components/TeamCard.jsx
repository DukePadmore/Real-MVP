const TeamCard = ({
  abbreviation,
  city,
  conference,
  division,
  full_name,
  name,
  logo,
}) => {
  return (
    <div className='team-card'>
      <div>
        <img className='team-logo' src={logo} alt={full_name} />
      </div>
      <h3>{full_name}</h3>
      <p>{conference}</p>
    </div>
  );
};

export default TeamCard;
