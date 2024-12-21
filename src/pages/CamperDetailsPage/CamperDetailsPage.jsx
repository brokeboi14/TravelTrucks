import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container.jsx";
import { fetchCamperById } from "../../store/operations.js";
import { selectCampers } from "../../store/selectors.js";
import FeaturesReviewsNav from "../../components/FeaturesReviewsNav/FeaturesReviewsNav.jsx";
import css from "./CamperDetailsPage.module.css";
import sprite from '../../assets/icons/sprite.svg'

const CamperDetailsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const camper = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  console.log("camper", camper);
  const gallery = camper.gallery;

  const test = camper?.reviews?.length ?? 0;

  const formatLocation = (location) => {
    if (typeof location !== "string") {
      return "Invalid location";
    }
    const [country, city] = location.split(", ");
    return `${city}, ${country}`;
  };

  const location = camper?.location ?? "Unknown";

  return (
    <>
      <div className={css.camperSection}>
        <Container>
          <h3 className={css.camperTitle}>{camper.name}</h3>
            <div className={css.ratingContainer}>
            <p className={css.ratingText}>
              <svg width={16} height={16}>
                <use href={`${sprite}#star-yellow`}></use>
              </svg>
              <span className={css.spanRating}>
                {camper.rating}({test} Reviews)
              </span>
            </p>
            <p className={css.ratingText}>
              <svg width={16} height={16}>
                <use href={`${sprite}#map`}></use>
              </svg>
              {formatLocation(location)}
            </p>
          </div>
          <div className={css.priceContainer}>
            <p>&euro;{camper.price}</p>
          </div>
          <ul className={css.list}>
            {Array.isArray(gallery) &&
              gallery.map((item, index) => {
                return (
                  <li key={index} className={css.item}>
                    <img
                      src={item.original}
                      alt="photo ${item.name}`"
                      className={css.img}
                    />
                  </li>
                );
              })}
          </ul>
          <p className={css.camperDescription}>{camper.description}</p>
          <div>
            <FeaturesReviewsNav />
          </div>
        </Container>
        <Container>
          <div>
            <Outlet />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CamperDetailsPage;