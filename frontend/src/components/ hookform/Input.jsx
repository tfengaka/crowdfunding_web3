import React from 'react';
import { useController } from 'react-hook-form';

function Input({ control, name, type = 'text', error, placeholder, ...rest }) {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full p-4 text-base font-medium border-2 rounded-lg bg-[#1C1C24] border-[#3A3A43] text-white outline-none focus:border-[#C5B6FE] placeholder:text-[#4B5264]`}
        placeholder={!error ? placeholder : ''}
        required={false}
        step="0.1"
        {...field}
        {...rest}
      />
      {error && !field.value && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-message">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
