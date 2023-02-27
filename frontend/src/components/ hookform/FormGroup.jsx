import React from 'react';

function FormGroup({ children }) {
  return <div className="grid lg:grid-cols-2 grid-cols-1 gap-[40px]">{children}</div>;
}

export default FormGroup;
