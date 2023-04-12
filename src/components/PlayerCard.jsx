import { ballDontLie } from '../utils/axios';

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
}) => {
  const handleClick = () => {
    displayPlayer(id);
  };

  // fonction permettant de récupérer les stats du joueur
  // à travailler : affiche par défaut la saison actuelle, renvoie un tableau vide si le joueur n'est plus actif
  // trouver un moyen de récupérer également la photo du joueur
  const displayPlayer = async playerId => {
    const { data } = await ballDontLie.get(
      `season_averages?season=2020&player_ids[]=${playerId}`
    );
    console.log(data);
  };

  return (
    <article className='player__card' onClick={handleClick}>
      <div className='player__team'>
        <img src={team_logo} alt={team.abbreviation} />
      </div>
      <div className='player__info'>
        <h3 className='player__name'>{`${first_name} ${last_name}`}</h3>
        <div className='player__details'>
          <span className='player__position'>{position ? position : ''}</span>
          <span className='player__height'>
            {height_feet && height_inches
              ? ` - ${height_feet}'${height_inches} - `
              : ''}
          </span>
          <span className='player__weight'>
            {weight_pounds ? weight_pounds : ''}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PlayerCard;
