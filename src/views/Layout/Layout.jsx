import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <div className={s.content}>
        <header className={s.header}>
          <NavLink className={s.logo} to="/" />
        </header>
        <main className={s.main}>
          <Outlet />
        </main>
      </div>
      <footer className={s.footer}>
        <Navigation />
      </footer>
    </>
  );
};

export default Layout;
