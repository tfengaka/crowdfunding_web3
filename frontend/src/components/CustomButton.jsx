import React from 'react';
function CustomButton({ btnType, title, onClick, styles }) {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] hover:opacity-80 ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
