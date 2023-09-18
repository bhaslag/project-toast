import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import useEscapeKey from '../../hooks/use-escape-key.js';

import styles from './ToastShelf.module.css';

function ToastShelf({toasts}) {
  const { dismissAllToasts } = React.useContext(ToastContext);

  const handleEscape = React.useCallback(() => {
    dismissAllToasts();
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            variant={toast.variant}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
