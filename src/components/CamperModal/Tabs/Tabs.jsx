import css from './Tabs.module.css';

const Tabs = ({ tabs, tabsRef, activeIdx, onTabClick }) => {
  return (
    <ul ref={tabsRef} className={css.tabs}>
      {tabs.map((tab, idx) => (
        <li key={idx}>
          <button
            onClick={() => onTabClick(idx)}
            disabled={idx === activeIdx}
            type="button"
            className={css.tab}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
