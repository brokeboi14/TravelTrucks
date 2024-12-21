import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container.jsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.navContainer}>
            <svg width={136} height={16}>
                <use href="/src/assets/icons/sprite.svg#Logo"></use>
            </svg>
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