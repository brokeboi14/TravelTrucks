import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm.jsx";
import { selectCampers } from "../../store/selectors.js";
import { fetchCamperById } from "../../store/operations.js";
import css from "./CamperReviews.module.css";
import sprite from '../../assets/icons/sprite.svg'

const CamperReviews = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const camper = useSelector(selectCampers);

  const reviews = camper.reviews;

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);
  return (
    <>
      <div className={css.box}>
        <ul className={css.list}>
          {Array.isArray(reviews) &&
            reviews.map((item, index) => {
              return (
                <li key={index} className={css.item}>
                  <div className={css.boxItem}>
                    <div className={css.avatar}>
                      <h3 className={css.titleAvatar}>
                        {item.reviewer_name.charAt(0)}
                      </h3>
                    </div>
                    <div className={css.boxReviewer}>
                      <h4 className={css.titleReviewer}>
                        {item.reviewer_name}
                      </h4>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          className={css.svg}
                          key={i}
                          style={{
                            color:
                              i < item.reviewer_rating ? " #ffc531" : "none",
                          }}
                          width={20}
                          height={20}
                        >
                          <use href={`${sprite}#star`}></use>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p>{item.comment}</p>
                </li>
              );
            })}
        </ul>
        <BookingForm />
      </div>
    </>
  );
};

export default CamperReviews;