import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./FeaturesReviewsNav.module.css";

const FeaturesReviewsNav = () => {
  return (
    <>
      <div>
        <nav className={css.featuresReviewsNav}>
          <NavLink
            className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
            to="features"
          >
            Features
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default FeaturesReviewsNav;