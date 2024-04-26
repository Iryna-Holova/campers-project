import { useEffect, useState } from 'react';
import icons from '../../images/sprite.svg';
import css from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscapeClose = ({ key }) => {
      if (key !== 'Escape') return;
      setIsClosing(true);
      setTimeout(() => {
        onClose();
      }, 200);
    };
    document.querySelector('html').classList.add('no-scroll');
    document.addEventListener('keydown', handleEscapeClose);

    return () => {
      document.querySelector('html').classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [onClose]);

  const handleModalClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <>
      <div
        onClick={handleModalClose}
        className={`${css.overlay} ${isClosing ? css.closing : ''}`}
      ></div>
      {children && (
        <div className={`${css.modal} ${isClosing ? css.closing : ''}`}>
          <button onClick={handleModalClose} className={css.close}>
            <svg width={32} height={32}>
              <use href={icons + '#icon-close'} />
            </svg>
          </button>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
