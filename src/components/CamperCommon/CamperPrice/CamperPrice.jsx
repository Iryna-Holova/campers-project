import css from './CamperPrice.module.css';

const CamperPrice = ({ price }) => {
  const formattedAmount = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false,
  });

  return <div className={css.text}>{formattedAmount}</div>;
};

export default CamperPrice;
