import css from './Equipping.module.css'
import sprite from '../../assets/icons/sprite.svg'

const Equipping = ({ item }) => {
  return (
    <>
      <div className={css.equippingContainer}>
        {item.AC && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#wind`}></use>
            </svg>
            <p>AC</p>
          </div>
        )}
        {item.transmission === "automatic" && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#diagram`}></use>
            </svg>
            <p>Automatic</p>
          </div>
        )}
        {item.engine === "petrol" && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#fuel`}></use>
            </svg>
            <p>Petrol</p>
          </div>
        )}
        {item.kitchen && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#cup-hot`}></use>
            </svg>
            <p>Kitchen</p>
          </div>
        )}
        {item.TV && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#tv`}></use>
            </svg>
            <p>TV</p>
          </div>
        )}
        {item.bathroom && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#ph_shower`}></use>
            </svg>
            <p>Bathroom</p>
          </div>
        )}

        {item.radio && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#radios`}></use>
            </svg>
            <p>Radio</p>
          </div>
        )}

        {item.refrigerator && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#solar_fridge-outline`}></use>
            </svg>
            <p>Refrigerator</p>
          </div>
        )}

        {item.water && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#ion_water-outline1`}></use>
            </svg>
            <p>Water</p>
          </div>
        )}

        {item.gas && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#gas`}></use>
            </svg>
            <p>Gas</p>
          </div>
        )}

        {item.microwave && (
          <div className={css.equipping}>
            <svg className={css.svg} width={20} height={20}>
              <use href={`${sprite}#lucide_microwave1`}></use>
            </svg>
            <p>Microwave</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Equipping;
