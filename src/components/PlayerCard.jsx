const PlayerCard = ({
  first_name,
  last_name,
  position,
  height_feet,
  height_inches,
  weight_pounds,
  team,
  team_logo,
}) => {
  return (
    <article className='player__card'>
      <div className='player__team'>
        <img src={team_logo} alt={team.abbreviation} />
      </div>
      <div className='player__info'>
        <h3 className='player__name'>{`${first_name} ${last_name}`}</h3>
        <div className=''>
          <p className='player__position'>
            {position ? position : 'position unknown'}
          </p>
          <p className='player__height'>
            {height_feet && height_inches
              ? `${height_feet}'${height_inches}`
              : 'height unknown'}
          </p>
          <p className='player__weight'>
            {weight_pounds ? weight_pounds : 'weight unknown'}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PlayerCard;
