import React from 'react';

function ProcessBar({ percent }) {
  return (
    <div className="relative w-full h-1 rounded-md bg-[#808191] bg-opacity-30">
      <div className={'absolute left-0 h-full rounded-md bg-[#4ACD8D] '} style={{ width: `${percent}%` }}></div>
    </div>
  );
}

export default ProcessBar;
