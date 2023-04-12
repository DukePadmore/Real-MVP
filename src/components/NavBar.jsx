import CalendarLogo from '../assets/icons/calendar.svg';
import PlayerLogo from '../assets/icons/user.svg';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__item'>
        <img src={PlayerLogo} alt='players' />
        <p>Players</p>
      </div>
      <div className='navbar__item'>
        <img src={CalendarLogo} alt='games' />
        <p>Games</p>
      </div>
    </div>
  );
};

export default NavBar;
