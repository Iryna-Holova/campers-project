import ButtonLink from 'components/ButtonLink/ButtonLink';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.image + ' container'}>
      <div className={css.text_block}>
        <h1 className={css.title}>
          Camper Rental <span>Ukraine</span>
        </h1>
        <p className={css.text}>
          The perfect solution for your outdoor adventures
        </p>
        <ButtonLink tag="Link" size="large" to={'/catalog'}>
          Book now
        </ButtonLink>
      </div>
    </div>
  );
};

export default Hero;
