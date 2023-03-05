import React, { useEffect, useState } from 'react';
import { CampaignsDisplay } from '../modules';
import { useStateContext } from '../context';
import { CampaignBlock, Loading, Section } from '../components';
import { daysLeft } from '../utils';
function Home() {
  const { address, contract, getCampaigns } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [myCampaignsCount, setMyCampaignsCount] = useState(0);
  const [myAttentionCampaign, setMyAttentionCampaign] = useState(null);
  useEffect(() => {
    (async function () {
      if (!contract) return;
      setIsLoading(true);
      try {
        const data = await getCampaigns();
        if (address) {
          const myCampaigns = data.filter((campaign) => campaign.owner === address);
          console.log(myCampaigns);
          const attentionCampaign = myCampaigns.find((campaign) => daysLeft(campaign.deadline) > 0);
          console.log(attentionCampaign);
          setMyCampaignsCount(myCampaigns.length);
          setMyAttentionCampaign(attentionCampaign);
        }

        setCampaigns(data);
      } catch (error) {
        console.error('Contract call fail: ', error);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, contract]);

  return (
    <div className="flex flex-col w-full gap-y-[30px]">
      {address && (
        <Section title="Your Campaigns" quantity={myCampaignsCount}>
          {isLoading ? <Loading /> : myAttentionCampaign && <CampaignBlock {...myAttentionCampaign} />}
        </Section>
      )}
      <CampaignsDisplay title="All Campaigns" isLoading={isLoading} campaigns={campaigns} />
    </div>
  );
}

export default Home;
