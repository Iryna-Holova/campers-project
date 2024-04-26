import { ICONS } from 'constants/campers';
import icons from '../../../images/sprite.svg';
import css from './CamperFeatures.module.css';

const CamperFeatures = ({ features }) => {
  return (
    <ul className={css.list}>
      {Object.entries(features).map(([key, value], idx) => {
        if (!value) return null;
        const type = typeof value;
        let text;
        switch (type) {
          case 'number':
            text = `${value} ${key}`;
            break;
          case 'string':
            text = /^\d/.test(value) ? `${key} ${value}` : value;
            break;
          case 'boolean':
            text = key;
            break;
          default:
            break;
        }

        return (
          <li key={idx} className={css.item}>
            <svg width={20} height={20}>
              <use href={icons + ICONS[key]} />
            </svg>
            <span className={type === 'number' ? '' : css.capitalize}>
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default CamperFeatures;
