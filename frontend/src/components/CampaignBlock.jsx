import React from 'react';
import CrowdInfo from './CrowdInfo';
import ReactHtmlParser from 'html-react-parser';
import { daysLeft } from '../utils';
import ProcessBar from './ProcessBar';

function CampaignBlock({ title, image, description, target, amountCollected, deadline }) {
  return (
    <div className="flex w-full gap-x-10">
      <div className="flex-shrink-0 max-w-[583px]">
        <img src={image} alt="" className="object-cover w-full rounded-3xl" />
      </div>
      <div className="flex flex-col gap-y-[25px] max-w-[600px]">
        <div className="flex items-baseline text-[#808191] gap-x-2">
          <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.67 2L9.67 4H18.5V14H2.5V2H7.67ZM8.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H18.5C19.6 16 20.5 15.1 20.5 14V4C20.5 2.9 19.6 2 18.5 2H10.5L8.5 0Z"
              fill="#808191"
            />
          </svg>
          <span className="text-[14px] leading-4 font-epilogue font-medium">Category</span>
        </div>

        <div className="w-full h-20 mt-1 mb-2">
          <div className="font-epilogue">
            <h3 className="text-base font-semibold mb-1 text-white">{title}</h3>
            <div className="h-full text-sm text-[#808191] truncate">{ReactHtmlParser(description)}</div>
          </div>
        </div>

        <ProcessBar percent={Number(amountCollected / target).toFixed(2)} />
        <div className="flex items-center justify-between gap-x-16">
          <CrowdInfo value={amountCollected} description={`Raised of ${target}`} />
          <CrowdInfo value={daysLeft(deadline)} description="Days left" />
        </div>
      </div>
    </div>
  );
}

export default CampaignBlock;
