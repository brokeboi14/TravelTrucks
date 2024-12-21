import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCampers } from "../../store/selectors.js";
import { fetchCampers } from "../../store/operations.js";
import CamperCard from "../CamperCard/CamperCard.jsx";

import css from "./CampersList.module.css";

const CampersList = () => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);

  const campers = useSelector(selectCampers);

  const campersAll = campers.items;

  const disabled = campers.total;

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <div>
        <ul className={css.campersList}>
          {Array.isArray(campersAll) &&
            campersAll.slice(0, visibleCount).map((item) => {
              return (
                <li key={item.id}>
                  <CamperCard item={item} />
                </li>
              );
            })}
        </ul>
        <div className={css.btnContainer}>
          {visibleCount < disabled && (
            <button className={css.loadMoreBtn} type="button" onClick={loadMore}>
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CampersList;