import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container.jsx";
import css from "./Navigation.module.css";
import logo from '../../assets/icons/logo.svg'

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.navContainer}>
          <img src={logo} alt="logo" />
            <nav className={css.nav}>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/catalog"
              >
                Catalog
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navigation;