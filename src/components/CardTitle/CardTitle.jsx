import css from './CardTitle.module.css';

const CardTitle = ({ children }) => {
  return <h3 className={css.text}>{children}</h3>;
};

export default CardTitle;
