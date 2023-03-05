import React from 'react';
import { createPortal } from 'react-dom';

function Backdrop({ children }) {
  return createPortal(
    <div className="fixed inset-0 w-full h-full z-50 bg-black bg-opacity-30">{children}</div>,
    document.querySelector('body')
  );
}

export default Backdrop;
