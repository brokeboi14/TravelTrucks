
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { Button } from "../Button/Button.jsx";
import Equipping from "../Equipping/Equipping.jsx";
import sprite from "../../assets/icons/sprite.svg";
import { toggleLike } from "../../store/slice.js";
import css from "./CamperCard.module.css";

const CamperCard = ({ item }) => {
  const dispatch = useDispatch();

  const likes = useSelector((state) => state.campers.likes);

  const isLike = likes.includes(item.id);

  const handleFavoriteClick = () => {
    dispatch(toggleLike(item.id));
  };

  const formatLocation = (location) => {
    const [country, city] = location.split(", ");
    return `${city}, ${country}`;
  };
  return (
    <>
      <div className={css.box}>
        <img
          src={item.gallery[0].thumb}
          alt="photo `${item.name}`"
          className={css.img}
        />
        <div>
          <div className={css.boxTitle}>
            <h3 className={css.title}>{item.name}</h3>
            <div className={css.boxPrice}>
              <p>&euro;{item.price}</p>
              <svg
                className={clsx(`${css.svg} ${isLike ? css.like : ""}`)}
                width={24}
                height={24}
                onClick={handleFavoriteClick}
              >
                <use href={`${sprite}#like`}></use>
              </svg>
            </div>
          </div>
          <div className={css.boxRatingLocation}>
            <p className={css.textRatingLocation}>
              <svg className={css.svg} width={16} height={16}>
                <use href={`${sprite}#star-yellow`}></use>
              </svg>
              <span className={css.spanRatingLocation}>
                {item.rating} ({item.reviews.length} Reviews)
              </span>
            </p>
            <p className={css.textRatingLocation}>
              <svg className={css.svg} width={16} height={16}>
                <use href={`${sprite}#map`}></use>
              </svg>
              {formatLocation(item.location)}
            </p>
          </div>
          <p className={css.textDescription}>{item.description}</p>
          <Equipping item={item} />
          <Button to={`/catalog/${item.id}/features`} target={"_blank"}>
            Show more
          </Button>
        </div>
      </div>
    </>
  );
};

export default CamperCard;