import css from './PageContainer.module.css';

const PageContainer = ({ children }) => {
  return <div className={css.container + ' container'}>{children}</div>;
};

export default PageContainer;
