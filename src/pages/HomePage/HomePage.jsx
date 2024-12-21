import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <>
    <div className={css.homeContainer}>
        <Container>
        <div className={css.titleContainer}>
      <h1 className={css.homeTitle}>Campers of your dreams</h1>
      <p className={css.homeSubtitle}>
      You can find everything you want in our catalog
      </p>
      <Button to="/catalog">View Now</Button>
      </div>
      </Container>
    </div>
    </>
  );
};

export default HomePage;