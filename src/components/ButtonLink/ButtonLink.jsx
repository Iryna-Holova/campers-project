import { Link } from 'react-router-dom';
import css from './ButtonLink.module.css';

const ButtonLink = ({
  tag = 'button',
  size = 'normal',
  color = 'primary',
  children,
  ...props
}) => {
  if (tag === 'button') {
    return (
      <button className={`${css.button} ${css[size]} ${css[color]}`} {...props}>
        {children}
      </button>
    );
  }

  if (tag === 'Link') {
    return (
      <Link className={`${css.button} ${css[size]} ${css[color]}`} {...props}>
        {children}
      </Link>
    );
  }

  return null;
};

export default ButtonLink;
