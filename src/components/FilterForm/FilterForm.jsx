import clsx from "clsx";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Checkbox } from "../Checkbox/Checkbox.jsx";
import sprite from "../../assets/icons/sprite.svg";
import { selectCampers } from "../../store/selectors.js";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../store/operations.js";
import { components } from "react-select";
import css from "./FilterForm.module.css";

const customStyles = {
  control: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    border: "none",
    width: "360px",
    borderRadius: "12px",
    padding: "10px",
    backgroundColor: " #f7f7f7",
    boxShadow: "none",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#6c717b",
    fontSize: "16px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#101828",
    fontSize: "16px",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "4px",
    marginTop: "0px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0",
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? "#dadbdf" : "#fff",
    color: "#101828",
    padding: "10px",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#ddd",
    },
  }),
};

const FilterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    city: null,
    equipment: [],
    vehicleType: [],
  });

  const campers = useSelector(selectCampers);

  const locations = campers.items;

  const locationsAll = Array.isArray(locations)
    ? locations.map((item) => {
        const [country, city] = item.location.split(", ");
        return { label: `${city}, ${country}` };
      })
    : [];

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, city: selectedOption });
  };

  const handleCheckboxChange = (event) => {
    console.log("hello");

    const { name, checked, value } = event.target;
    setFormData({
      ...formData,
      [name]: checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value),
    });
  };

  const handleSubmit = (event) => {
    toast.success("Filtering successful!");
    console.log("Filter: ", formData);
    event.preventDefault();
  };
  return (
    <>
      <form className={css.box} onSubmit={handleSubmit}>
        <label className={css.label}>
          Location
          <div className={css.boxInput}>
            <Select
              styles={customStyles}
              placeholder="City"
              options={locationsAll}
              components={{
                Control: ({ children, isFocused, ...props }) => (
                  <components.Control {...props}>
                    <svg
                      className={clsx(css.svg, isFocused && css.svgFocused)}
                      width={20}
                      height={20}
                    >
                      <use href={`${sprite}#map`}></use>
                    </svg>
                    {children}
                  </components.Control>
                ),
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              onChange={handleSelectChange}
            />
          </div>
        </label>
        <p className={css.textForm}>Filters</p>
        <h2 className={css.titleForm}>Vehicle equipment</h2>
        <div className={css.line}></div>

        <div className={css.customCheckboxes}>
          <Checkbox
            id={"checkbox1"}
            icon={"wind"}
            label={"AC"}
            onChange={handleCheckboxChange}
            value={"AC"}
            name="equipment"
          />
          <Checkbox
            id={"checkbox2"}
            icon={"diagram"}
            label={"Automatic"}
            onChange={handleCheckboxChange}
            value={"Automatic"}
            name="equipment"
          />
          <Checkbox
            id={"checkbox3"}
            icon={"fuel"}
            label={"Petrol"}
            onChange={handleCheckboxChange}
            value={"Petrol"}
            name="equipment"
          />
          <Checkbox
            id={"checkbox4"}
            icon={"cup-hot"}
            label={"Kitchen"}
            onChange={handleCheckboxChange}
            value={"Kitchen"}
          />
          <Checkbox
            id={"checkbox5"}
            icon={"tv"}
            label={"TV"}
            onChange={handleCheckboxChange}
            value={"TV"}
          />
          <Checkbox
            id={"checkbox6"}
            icon={"ph_shower"}
            label={"Bathroom"}
            onChange={handleCheckboxChange}
            value={"Bathroom"}
          />
          <Checkbox
            id={"checkbox7"}
            icon={"radios"}
            label={"Radio"}
            onChange={handleCheckboxChange}
            value={"Radio"}
          />
          <Checkbox
            id={"checkbox8"}
            icon={"solar_fridge-outline"}
            label={"Refrigerator"}
            onChange={handleCheckboxChange}
            value={"Refrigerator"}
          />
          <Checkbox
            id={"checkbox9"}
            icon={"ion_water-outline"}
            label={"Water"}
            onChange={handleCheckboxChange}
            value={"Water"}
          />
          <Checkbox
            id={"checkbox10"}
            icon={"gas"}
            label={"Gas"}
            onChange={handleCheckboxChange}
            value={"Gas"}
          />
          <Checkbox
            id={"checkbox11"}
            icon={"lucide_microwave"}
            label={"Microwave"}
            onChange={handleCheckboxChange}
            value={"Microwave"}
          />
        </div>

        <h2 className={css.titleForm}>Vehicle type</h2>
        <div className={css.line}></div>

        <div className={clsx(css.customCheckboxes, css.boxCheck)}>
          <Checkbox
            id={"box1"}
            icon={"bi_grid-1x2"}
            label={"Van"}
            onChange={handleCheckboxChange}
            value={"Van"}
          />
          <Checkbox
            id={"box2"}
            icon={"bi_grid"}
            label={"Fully Integrated"}
            onChange={handleCheckboxChange}
            value={"FullyIntegrated"}
          />
          <Checkbox
            id={"box3"}
            icon={"bi_grid-3x3-gap"}
            label={"Alcove"}
            onChange={handleCheckboxChange}
            value={"Alcove"}
          />
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default FilterForm;