import sprite from "../../assets/icons/sprite.svg"
import css from "./Checkbox.module.css";

export const Checkbox = ({ id, icon, label, value }) => {
  return (
    <div className={css.checkbox}>
      <input type="checkbox" id={id} value={value} name={id} />
      <label htmlFor={id}>
        <svg className={css.svg} width={32} height={32}>
          <use href={`${sprite}#${icon}`}></use>
        </svg>
        <p>{label}</p>
      </label>
    </div>
  );
};
