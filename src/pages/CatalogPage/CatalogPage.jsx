import { Container } from "../../components/Container/Container.jsx";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import CampersList from "../../components/CampersList/CampersList.jsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <>
      <div className={css.catalogSection}>
        <Container>
          <div className={css.catalogContainer}>
            <FilterForm />
            <CampersList />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CatalogPage;