import { useEffect, useState } from 'react';
import { ballDontLie } from '../utils/axios';
import TeamCard from '../components/TeamCard';
import logos from '../assets';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const getTeams = async () => {
    const { data } = await ballDontLie('teams');
    setTeams(data.data);
  };
  useEffect(() => {
    getTeams();
  }, []);
  return (
    <div className='teams'>
      {teams.map(team => (
        <TeamCard key={team.id} {...team} logo={logos[team.abbreviation]} />
      ))}
    </div>
  );
};

export default Teams;
