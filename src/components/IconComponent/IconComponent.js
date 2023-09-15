import React from 'react';

function IconComponent({ icon: Icon , ...delegated}) {
  return (
    <div {...delegated}>
      <Icon size={24} />
    </div>
  );
}

export default IconComponent;
