import ReactHtmlParser from 'html-react-parser';
import { daysLeft } from '../utils';

import { thirdweb } from '../assets';

import CrowdInfo from './CrowdInfo';
function CampaignCard({ title, image, description, target, amountCollected, deadline, owner }) {
  return (
    <div className="rounded-[15px] bg-[#1C1C24]">
      <div className="h-[158px]">
        <img src={image} alt="thumbnail" className="object-cover w-full h-full rounded-[15px]" />
      </div>

      <div className="px-5 py-4">
        <div className="flex items-baseline text-[#808191] gap-x-2">
          <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.67 2L9.67 4H18.5V14H2.5V2H7.67ZM8.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H18.5C19.6 16 20.5 15.1 20.5 14V4C20.5 2.9 19.6 2 18.5 2H10.5L8.5 0Z"
              fill="#808191"
            />
          </svg>
          <span className="text-[14px] leading-4 font-epilogue font-medium">Category</span>
        </div>
        {/* Info */}
        <div className="w-full h-20 mt-3 mb-4">
          <div className="font-epilogue">
            <h3 className="text-base font-semibold mb-1 text-white">{title}</h3>
            <div className="h-full text-sm text-[#808191] truncate">{ReactHtmlParser(description)}</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-5 gap-x-5">
          <CrowdInfo value={amountCollected} description={`Raised of $${target}`} />
          <CrowdInfo
            value={daysLeft(deadline) < 0 ? `Ended ${Math.abs(daysLeft(deadline))}` : daysLeft(deadline)}
            description={daysLeft(deadline) < 0 ? 'Days Before' : 'Days Left'}
            isError={daysLeft(deadline) < 0}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-[#2c2f32] p-1">
            <img src={thirdweb} alt="" className="object-cover rounded-full" />
          </div>
          <span className="max-w-full text-sm text-[#808191] font-epilogue truncate">
            by <strong className="text-[12px] font-semibold text-[#B2B3BD]">{owner}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
