import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectCampers } from "../../store/selectors.js";
import { fetchCamperById } from "../../store/operations.js";
import Equipping from "../Equipping/Equipping.jsx";
import BookingForm from "../BookingForm/BookingForm.jsx";
import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const camper = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  return (
    <>
      <div className={css.featuresContainer}>
        <div className={css.vehicleContainer}>
          <Equipping item={camper} />
          <h2 className={css.vehicleTitle}>Vehicle details</h2>
          <div className={css.line}></div>
          <ul className={css.featuresList}>
            <li className={css.featuresItem}>
              <p>Form</p>
              <p>{camper.form}</p>
            </li>
            <li className={css.featuresItem}>
              <p>Length</p>
              <p>{camper.length}</p>
            </li>
            <li className={css.featuresItem}>
              <p>Width</p>
              <p>{camper.width}</p>
            </li>
            <li className={css.featuresItem}>
              <p>Height</p>
              <p>{camper.height}</p>
            </li>
            <li className={css.featuresItem}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </li>
            <li className={css.featuresItem}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
        <BookingForm />
      </div>
    </>
  );
};

export default CamperFeatures;