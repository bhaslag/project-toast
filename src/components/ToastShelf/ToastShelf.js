import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleDismiss}) {
  const wrapperRef = React.useRef();
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li ref={wrapperRef} key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            variant={toast.variant}
            handleDismiss={handleDismiss}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
      {/* <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li> */}
    </ol>
  );
}

export default ToastShelf;
