import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import IconComponent from '../IconComponent';
import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({id, variant, children}) {
  const { dismissToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <IconComponent 
        className={styles.iconContainer} 
        icon={ICONS_BY_VARIANT[variant]} 
      />
      <p className={styles.content}>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
