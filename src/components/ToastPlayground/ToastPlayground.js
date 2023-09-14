import React from 'react';

import Button from '../Button';
import RadioInput from '../RadioInput';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');

  function handleMessageChange(event) {
    const newMessage = event.target.value;
    setMessage(newMessage);
  }

  function handleRadioChange(event) {
    setVariant(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* <Toast />/ */}

      <form 
        className={styles.controlsWrapper}
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option, key) => (
              <RadioInput
                  key={key}
                  id={`variant-${option}` }
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={handleRadioChange}
              >
                {option}
              </RadioInput>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
