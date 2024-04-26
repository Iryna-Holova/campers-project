import css from './CamperDetails.module.css';

const FORM = {
  alcove: 'Alcove',
  fullyIntegrated: 'Fully integrated',
  panelTruck: 'Panel truck',
};

const CamperDetails = ({ details }) => {
  return (
    <div>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        {Object.entries(details).map(([key, value], idx) => {
          let text;
          switch (key) {
            case 'form':
              text = FORM[value];
              break;
            case 'consumption':
              text = value;
              break;
            default:
              text = value.replace(/(\d)([a-zA-Z])/g, '$1 $2');
              break;
          }
          return (
            <li key={idx} className={css.item}>
              <div className={css.label}>{key}</div>
              <div>{text}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CamperDetails;
