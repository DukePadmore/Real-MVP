import { NavLink } from 'react-router-dom';
import CalendarLogo from '../assets/icons/calendar.svg';
import PlayerLogo from '../assets/icons/user.svg';

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
      {/* <div className='navbar__item'>
        <img src={PlayerLogo} alt='players' />
        <p>Players</p>
      </div> */}
      {/* <div className='navbar__item'>
        <img src={CalendarLogo} alt='games' />
        <p>Games</p>
      </div> */}
    </div>
  );
};

export default NavBar;
