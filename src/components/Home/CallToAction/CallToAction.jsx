import css from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={css.section + ' container'}>
      <p className={css.text}>
        Ready to embark on your Ukrainian adventure? Explore our camper catalog,
        check availability, and book your dream camper today. Experience the
        beauty of Ukraine like never before with Camper Rental Ukraine!
      </p>
    </section>
  );
};

export default CallToAction;
