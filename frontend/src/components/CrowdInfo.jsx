import React from 'react';

function CrowdInfo({ value, description, isError }) {
  return (
    <div>
      <h3 className={`font-semibold ${isError ? 'text-[#EB5757] text-sm' : 'text-[#B2B3BD] text-base'}`}>{value}</h3>
      <span className={`font-medium text-sm truncate ${isError ? 'text-[#EB5757]' : 'text-[#B2B3BD]'}`}>
        {description}
      </span>
    </div>
  );
}

export default CrowdInfo;
