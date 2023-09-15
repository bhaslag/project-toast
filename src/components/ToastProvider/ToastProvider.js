import React from 'react';
export const ToastContext = React.createContext();
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [toasts, setToasts] = React.useState([]);
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const handleDismiss = React.useCallback(
    (id) => {
      const nextToasts = toasts.filter((toast) => {
        return toast.id !== id;
      });

        setToasts(nextToasts)
      }, [toasts, setToasts]
  );

  const handleAddToast = React.useCallback(
    (event) => {
      event.preventDefault();

      const newToast = {
        id: crypto.randomUUID(),
        message: message,
        variant: variant,
      };
      const nextToasts = [...toasts, newToast];
      setToasts(nextToasts);

      setMessage('');
      setVariant(VARIANT_OPTIONS[0]);
    }, [message, toasts, variant]);

  return (
    <ToastContext.Provider 
      value={{
        toasts,
        handleDismiss, 
        handleAddToast, 
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
