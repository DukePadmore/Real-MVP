const Game = ({
  home_team,
  home_team_score,
  home_logo,
  visitor_team,
  visitor_team_score,
  visitor_logo,
}) => {
  return (
    <article className='game'>
      <div className='game__team away'>
        <img src={visitor_logo} alt='away team' />
        <h3>{visitor_team.name}</h3>
        {/* <p>52-24</p> */}
      </div>
      <div className='game__score'>
        <h2>{`${visitor_team_score}-${home_team_score}`}</h2>
      </div>
      <div className='game__team home'>
        <img src={home_logo} alt='home team' />
        <h3>{home_team.name}</h3>
        {/* <p>55-21</p> */}
      </div>
    </article>
  );
};

export default Game;
