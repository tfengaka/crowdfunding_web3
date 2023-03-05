import React from 'react';

function Section({ title, quantity, children }) {
  return (
    <section>
      <div className="flex items-center mb-5 gap-x-1">
        <h2 className="text-lg font-semibold  text-white">{title}</h2>
        {quantity && <h2 className="text-lg font-semibold text-[#6F49FD]">({quantity})</h2>}
      </div>
      {children}
    </section>
  );
}
export default Section;
