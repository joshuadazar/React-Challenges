import '@/scss/_Menu.scss';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <header className="header">
        <ul>
          <li>
            <Link to={`/`}>List Exercise</Link>
          </li>
          <li>
            <Link to={`/counter`}>Countdown</Link>
          </li>

          <li>
            <Link to={`/swapi`}>SWAPI</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Menu;
