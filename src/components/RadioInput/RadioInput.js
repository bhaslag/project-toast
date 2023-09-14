import React from 'react';

function RadioInput({id, children, ...delegated}) {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        id={id}
        {...delegated}
      />
      {children}
    </label>
  );
}

export default RadioInput;
