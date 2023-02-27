import React from 'react';

function Label({ htmlFor, label, required }) {
  return (
    <label
      className={`font-epilogue inline-block text-sm mb-1 font-medium cursor-pointer text-[#808191]`}
      htmlFor={htmlFor}
    >
      {label}
      {required && <strong className="text-[#EB5757]"> *</strong>}
    </label>
  );
}

export default Label;
