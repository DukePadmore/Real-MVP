import { NavLink } from 'react-router-dom';
import CalendarLogo from '../assets/icons/calendar.svg';
import PlayerLogo from '../assets/icons/user.svg';
import TeamLogo from '../assets/icons/dribbble.svg';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/players'
        className={({ isActive, isPending }) =>
          isPending ? 'navbar__item' : isActive ? 'navbar__item active' : ''
        }
      >
        <img src={PlayerLogo} alt='players' />
        <p>Players</p>
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? 'navbar__item' : isActive ? 'navbar__item active' : ''
        }
      >
        <img src={CalendarLogo} alt='games' />
        <p>Games</p>
      </NavLink>
      <NavLink
        to='/teams'
        className={({ isActive, isPending }) =>
          isPending ? 'navbar__item' : isActive ? 'navbar__item active' : ''
        }
      >
        <img src={TeamLogo} alt='teams' />
        <p>Teams</p>
      </NavLink>
    </div>
  );
};

export default NavBar;
